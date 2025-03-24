import React from "react";
import Header from "../header";
import "./RefundPolicy.css";

function RefundPolicy() {
  return (
    <>
      <Header />
      <div className="privacy-container">
        <p className="common-title">
          Refund <span className="color-effect">Policy</span>
        </p>

        <div className="policy-section">
          <h3>Statement of Policy</h3>
          <p>
            This refund policy outlines important information regarding course
            fees and other applicable charges for participants enrolled in
            courses at LearnLeap.
          </p>
        </div>

        <div className="policy-section">
          <h3>To Whom the Policy Applies</h3>
          <p>
            This policy applies to all participants enrolled in any courses
            offered by LearnLeap.
          </p>
        </div>

        <div className="policy-section">
          <h3>Course Fees and Other Charges</h3>
          <ul>
            <li>
              <strong>Non-Refundable Fee:</strong> Upon successful completion of
              the application procedure, participants are required to pay a
              non-refundable course fee. This fee secures your spot in the
              course.
            </li>
            <li>
              <strong>No Refund for Personal Reasons:</strong> The course fee is
              non-refundable and will not be returned for personal reasons,
              including but not limited to health issues, family emergencies, or
              any other individual circumstances.
            </li>
            <li>
              <strong>Refund Conditions:</strong> The course fee will only be
              refunded if the course is discontinued for any reason by Birla
              LearnLeap Training Academy.
            </li>
            <li>
              <strong>Absences and Missed Sessions:</strong> Participants who
              miss sessions will not be eligible for a refund for those missed
              classes. Continuing with the course after absences does not
              entitle participants to a refund for any sessions not attended.
              Additionally, if assignments are not submitted, the participant
              will not be eligible for a refund.
            </li>
            <li>
              <strong>Course Completion:</strong> If a participant is unable to
              complete the course for any reason, the paid course fee will be
              forfeited.
            </li>
            <li>
              <strong>Payment Security:</strong> Birla LearnLeap utilizes a
              third-party payment service provider for online transactions.
              While we prioritize security, we cannot guarantee protection
              against unauthorized data use or theft.
            </li>{" "}
            <li>
              <strong>Communication Responsibility:</strong> Participants are
              responsible for providing accurate contact information. Birla
              LearnLeap is not liable for any failure to communicate due to
              incorrect or incomplete details.
            </li>
            <li>
              <strong>Promotional Registrations:</strong> Fees paid during
              discounts/promotions are non-refundable.
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>
            By enrolling in a course, participants agree to the terms outlined
            in this refund policy
          </h3>
          <h3>
            For any questions or concerns regarding this policy, please contact
          </h3>
          <div className="contact-info">
            <p>
              📞 Phone: <a href="tel:+917977768801">+91-7977768801</a>
            </p>
            <p>
              📧 Email:{" "}
              <a href="mailto:info@birlalearnleap.com">
                info@birlalearnleap.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
