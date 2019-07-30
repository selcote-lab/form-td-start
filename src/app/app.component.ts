import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "teacher";
  genders = ["male", " "];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //     secret: "pet",
    //     questionAnswer: ""
    //   },
    //   gender: "male"
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log("on Submitted ");
  //   console.log(form);
  //   console.log(this.defaultQuestion);
  // }

  onSubmit() {
    // console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}
