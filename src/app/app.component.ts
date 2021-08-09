import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Data: Array<any>;
  submitData;
  approveFlag = [];
  rejectFlag = [];
  status = [];
  textarea = [];

  constructor() {
    this.Data = [
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Apple', Contact: 'Babu bhaiya', Country: 'UK' },
      { Company: 'Amazon', Contact: 'Shyam', Country: 'IN' }
    ];
  }

  submit() {
    let resultData = []; // final array for API
    this.submitData = [...this.Data];
    for (let i = 0; i < this.submitData.length; i++) {
      delete this.submitData[i].Company;
    }
    console.log(this.Data, 'removed array');
    this.submitData.map((row, index) => {
      console.log(this.status[index]);
      const obj = {
        ...row,
        status: this.status[index] ? this.status[index] : null,
        comments: this.textarea[index] ? this.textarea[index] : null
      };

      resultData.push(obj);
    });
    console.log(resultData);
  }
  // change(){

  //   console.log('jhcbjdcbh')
  // }

  approve(len) {
    console.log('in approval all', len);
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = false;
      this.approveFlag[i] = true;
      this.status[i] = 'Approve';
    }
    // this.rejectFlag = false;
    // this.approveFlag = true;

    // if (this.approveFlag === true) {
    //   this.approveFlag = false;
    // } else {
    //   this.approveFlag = true;
    // }
  }

  reject(len) {
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = true;
      this.approveFlag[i] = false;
      this.status[i] = 'Reject';
    }
    // this.approveFlag = false;
    // this.rejectFlag = true;
    // if (this.rejectFlag === true) {
    //   this.rejectFlag = false;
    // } else {
    //   this.rejectFlag = true;
    // }
  }
}
