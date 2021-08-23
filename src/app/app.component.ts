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
  disabledFlag = true;
  textareaFlag = false;

  constructor() {
    this.Data = [
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Apple', Contact: 'Babu bhaiya', Country: 'UK' },
      { Company: 'Amazon', Contact: 'Shyam', Country: 'IN' }
    ];
  }

  submit() {
    let resultData = [];
    let reqObj = []; // final array for API
    // this.submitData = this.Data.map(x => Object.assign({}, x));
    // for (let i = 0; i < this.submitData.length; i++) {
    //   delete this.submitData[i].Company;
    // }
    // console.log(this.submitData, 'removed array');
    this.Data.map((row, index) => {
      console.log(this.status[index]);
      const obj = {
        ...row,
        status: this.status[index] ? this.status[index] : null,
        comments: this.textarea[index] ? this.textarea[index] : null
      };

      resultData.push(obj);
    });
    const statusToRemove = null;

const filteredPeople = resultData.filter((item) => item.status !== statusToRemove);

    console.log(filteredPeople, 'reqObject');
  }

  

  submitDisabled(){
    this.disabledFlag = false;
    
  }
  callAll(){
    this.submitDisabled();
    this.textareaFlag = true;
  }

  approve(len) {
    console.log('in approval all', len);
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = false;
      this.approveFlag[i] = true;
      this.status[i] = 'Approve';
    }
    
  }

  reject(len) {
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = true;
      this.approveFlag[i] = false;
      this.status[i] = 'Reject';
    }
   
  }
}
