import { Component, OnInit } from "@angular/core";
import { SurveyModel } from "../../../../1.9.5/survey.angular.d";

declare const Survey; // This is required for the component to load the actual object from CDN in runtime

// Survey.StylesManager.applyTheme("modern");

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"],
})
export class SurveyComponent implements OnInit {
  constructor() {}

  surveyJSON = {
    focusFirstQuestionAutomatic: false,
    completedHtml:
      "<div style='min-height:30rem;padding-top: 13rem;text-align: center;'>Thank you for your request {name}. We'll get in touch with you as soon as possible.</div>",
    pages: [
      {
        name: "contactUs",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Name",
            isRequired: true,
            autoComplete: "name",
            placeHolder: "Please enter your name",
          },
          {
            type: "text",
            name: "email",
            title: "Email",
            isRequired: true,
            inputType: "email",
            autoComplete: "email",
            placeHolder: "Please enter your email",
          },
          {
            type: "comment",
            name: "comment",
            title: "Comment",
            isRequired: true,
            placeHolder: "Please enter your query/feedback",
            autoGrow: true,
          },
        ],
      },
    ],
    showPrevButton: false,
    showTitle: false,
    showPageTitles: false,
    showQuestionNumbers: "off",
    questionErrorLocation: "bottom",
    autoGrowComment: true,
    completeText: "Submit",
    widthMode: "responsive",
  };

  myCss = {
    root: "bg-transperent",
    container: "container bg-transperent",
    header: "panel-heading card-header",
    body: "panel-body card-block mt-4",
    bodyEmpty: "panel-body card-block mt-4 sv_body_empty",
    footer: "",
    title: "",
    description: "",
    logo: "sv_logo",
    logoImage: "sv_logo__image",
    headerText: "sv_header__text",
    navigationButton: "btn-custom btn-lg",
    completedPage: "",
    page: {
      root: "",
      title: "",
      description: "small",
    },
    row: "row pb-4 px-3",
    question: {
      mainRoot: "sv_qstn",
      flowRoot: "sv_q_flow sv_qstn",
      header: "",
      headerLeft: "title-left",
      content: "",
      contentLeft: "content-left",
      titleLeftRoot: "sv_qstn_left",
      title: "site-font-color",
      titleExpandable: "sv_q_title_expandable",
      number: "sv_q_num",
      description: "small",
      descriptionUnderInput: "small",
      requiredText: "color-darkred",
      comment: "form-control-no-box-shadow",
      required: "",
      titleRequired: "",
      hasError: "has-error",
      indent: 20,
      formGroup: "form-group",
    },
    error: {
      root: "",
      icon: "",
      item: "font-weight-bold color-darkred",
      locationTop: "sv_qstn_error_top",
      locationBottom: "sv_qstn_error_bottom",
    },
    comment: "form-control-no-box-shadow",
    text: "form-control-no-box-shadow",
    expression: "form-control-no-box-shadow",
  };

  ngOnInit(): void {
    let surveyModel = new Survey.Model(this.surveyJSON);
    surveyModel.onComplete.add((survey: SurveyModel, options: any) => {
      survey.sendResult("8a50452c-8b50-4d71-a495-dbd294ad8a37");
    });
    Survey.SurveyNG.render("surveyElement", {
      model: surveyModel,
      css: this.myCss,
    });
  }
}
