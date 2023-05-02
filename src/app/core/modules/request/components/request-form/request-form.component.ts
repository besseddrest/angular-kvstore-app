import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {
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
