import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  myForm: FormGroup | null = null;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const qps = this.formBuilder.group({
      get: null,
      set: null,
      del: null
    });

    this.myForm = this.formBuilder.group({
      name: '',
      owner: '',
      team: '',
      description: '',
      data_size_gb: null,
      storage_type: '',
      maxQps: qps,
      is_pii: false,
      review_status: null,
      partitions: null,
      cluster: null,
      reviewer: null,
    });

    this.myForm.valueChanges.subscribe(console.log);
  }
}
