import { Component, OnInit } from '@angular/core';
import { foodDetails } from '../../services/menulistdata';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  imports: [ ReactiveFormsModule, FormsModule, CommonModule],
  standalone: true,
  styleUrl: './menupage.component.css',
})
export class MenupageComponent implements OnInit {
  menuList: any[] = foodDetails.menudata;
  id: number = 0;
  menuItem: any[] = [];
  orderForm!: FormGroup;
  submitted: boolean = false;
  constructor(private routeParams: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.routeParams.params.subscribe((params) => {
      let id = params['id'].replace(':', '');
      this.id = +id;
    });

    if (this.menuList) {
      this.menuList.filter((value) => {
        if (value.id === this.id) {
          this.menuItem.push(value);
          console.log(this.menuItem);
        }
      });
    }
    this.orderForm = this.fb.group({
      full_name: [null, Validators.required],
      mobile_number: [null, Validators.required],
      address: [null, Validators.required]
    })
  }

  submit() {
    this.submitted = true;
    if(this.orderForm.status == 'VALID'){
      console.log(this.orderForm.value);
      alert("Order Confirmed")
    } 
  }
  
}
