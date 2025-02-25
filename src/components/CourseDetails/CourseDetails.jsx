import "./CourseDetails.css";
import ReportIcon from "@mui/icons-material/Report";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ClosedCaptionRoundedIcon from "@mui/icons-material/ClosedCaptionRounded";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import SystemUpdateAltTwoToneIcon from "@mui/icons-material/SystemUpdateAltTwoTone";
import AllInclusiveTwoToneIcon from "@mui/icons-material/AllInclusiveTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import Header from "../header";
import CustomizedBreadcrumbs from "../BreadCrumb/BreadCrumb";

export const CourseDetails = () => {
  return (
    <div>
      <Header />
      <div className="BlackBox">
        <div className="BBText">
          <div className="flex purpal">
            <CustomizedBreadcrumbs />
          </div>

          <h1 className="course-title">
            Certificate Program for Leadership in Education
          </h1>

          <p className="course-subtitle">
            Transforming Educators into Visionary Leaders for the Future of
            Learning
          </p>

          <div className="course-rating-section">
            <span className="Ybox">Bestseller</span>
          </div>
          <div className="course-rating-two">
            <span className="darkyellow">
              <span>
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarHalfSharpIcon />
              </span>
            </span>
            <span className="purpal underline">(17,379 rating)</span>
            <span className="white">185,449 students</span>
          </div>
          <div className="Bcreated">
            <span className="white">Created by </span>
            <span className="purpal underline">Jose Portilla</span>
          </div>

          <div className="white BBbottom">
            <span className="BBicons">
              <ReportIcon />
            </span>
            <span className="BBbottomText">Last updated 9/2019</span>
            <span className="BBicons">
              {" "}
              <PublicTwoToneIcon />
            </span>
            <span className="BBbottomText">English</span>
            <span className="BBicons">
              <ClosedCaptionRoundedIcon />
            </span>
            <span className="BBbottomText">
              English [Auto], Indonesian [Auto],{" "}
            </span>
            <span className="BBbottomText underline">6more</span>
          </div>
        </div>
      </div>

      <div className="fixBox FixB">
        <div className="innerFixBox">
          <div className="Ftop2lines">
            <div className="flex FTH">
              <h1 className="FT1"> ₹10,000 </h1>
              <span className="FT2"> ₹13,499 </span>
              <span className="FT3"> 87% off </span>
            </div>
            <div className="red">
              <AccessAlarmsIcon className=""/>
              <span className="bold">5 hours</span> left at this price!
            </div>
          </div>

          <button className="gotocartBtn">Go to cart</button>
          <button className="buynowBtn">Buy now</button>

          <p className="center">30-Day Money-Back Guarantee</p>

          <div className="ThisCourse">
            <h4>This course includes:</h4>
            <p>
              <OndemandVideoSharpIcon /> 21 hours on-demand video
            </p>
            <p>
              <NoteAddSharpIcon /> 3 articles
            </p>
            <p>
              <SystemUpdateAltTwoToneIcon /> 4 downloadable resources
            </p>
            <p>
              <AllInclusiveTwoToneIcon /> Full lifetime access
            </p>
            <p>
              <PhoneAndroidTwoToneIcon /> Access on mobile and TV
            </p>
            <p>
              <EmojiEventsTwoToneIcon /> Certificate of completion
            </p>
          </div>

          <div className="flex gap underline pointer">
            <h4>Share</h4>
            <h4>Gift this course</h4>
            <h4>Apply Coupon</h4>
          </div>

          <div className="training">
            <h3>Training 5 or more people?</h3>
            <p>
              Get your team access to 6,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <button className="buynowBtn btn2">Try Udemy Business</button>
          </div>
        </div>
      </div>
    </div>
  );
};
