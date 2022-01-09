import { Component, OnInit } from "@angular/core";
import * as Survey from "survey-angular";

Survey.StylesManager.applyTheme("bootstrap");

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  
  constructor() {}

  surveyJSON = {
    focusFirstQuestionAutomatic: false,
    completedHtml:
      "Thank you for your request {name}. We'll get in touch with you as soon as possible.",
    pages: [
      {
        name: "contactUs",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Name",
            isRequired: true,
            placeHolder: "Please enter your name",
          },
          {
            type: "text",
            name: "email",
            title: "Email",
            isRequired: true,
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
    "root": "bg-transperent",
    "container": "container bg-transperent",
    "header": "panel-heading card-header",
    "body": "panel-body card-block mt-4",
    "bodyEmpty": "panel-body card-block mt-4 sv_body_empty",
    "footer": "",
    "title": "",
    "description": "",
    "logo": "sv_logo",
    "logoImage": "sv_logo__image",
    "headerText": "sv_header__text",
    "navigationButton": "",
    "completedPage": "",
    "navigation": {
      "complete": "btn btn-primary btn-lg",
      "prev": "btn sv_prev_btn",
      "next": "btn sv_next_btn",
      "start": "btn sv_start_btn",
      "preview": "btn sv_preview_btn",
      "edit": "btn sv_edit_btn"
    },
    "page": {
      "root": "",
      "title": "",
      "description": "small"
    },
    "row": "row pb-4",
    "question": {
      "mainRoot": "sv_qstn",
      "flowRoot": "sv_q_flow sv_qstn",
      "header": "",
      "headerLeft": "title-left",
      "content": "",
      "contentLeft": "content-left",
      "titleLeftRoot": "sv_qstn_left",
      "title": "",
      "titleExpandable": "sv_q_title_expandable",
      "number": "sv_q_num",
      "description": "small",
      "descriptionUnderInput": "small",
      "requiredText": "sv_q_required_text",
      "comment": "form-control",
      "required": "",
      "titleRequired": "",
      "hasError": "has-error",
      "indent": 20,
      "formGroup": "form-group"
    },
    "error": {
      "root": "alert alert-danger",
      "icon": "glyphicon glyphicon-exclamation-sign",
      "item": "",
      "locationTop": "sv_qstn_error_top",
      "locationBottom": "sv_qstn_error_bottom"
    },
    "comment": "form-control",
    "text": "form-control",
    "expression": "form-control"
  };

  ngOnInit(): void {
    let surveyModel = new Survey.Model(this.surveyJSON);
    surveyModel.onComplete.add((survey: Survey.SurveyModel, options: any) => {
      survey.sendResult("8a50452c-8b50-4d71-a495-dbd294ad8a37");
    });
    Survey.SurveyNG.render("surveyElement", { 
      model: surveyModel,
      css: this.myCss
    });
  }
}
