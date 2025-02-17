import checkbox from './icons/check_box_outline_blank_black_24dp.svg'
import arrow from './icons/arrow_drop_down_black_24dp.svg'
import refresh from './icons/refresh_black_24dp.svg'
import more from './icons/more_vert_black_20dp.png'
import chevron from './icons/chevron_left_black_24dp.svg'
import right from './icons/chevron_right_black_24dp.svg'
import keyboard from './icons/keyboard_black_24dp.svg'
import arrowdrop from './icons/arrow_drop_down_black_24dp.svg'
import Inbox from './Inbox/Inbox'
import Sent from './Sent/Sent'
import Login from './Login'
import Snoozed from './snoozed/Snoozed'
import Draft from './snoozed/Draft/Draft'
import Starred from './Starred'


const Body = ({ params }) => {
  console.log(params)
  let renderComponent = (component) => {
    let data;
    switch (component) {
      case "inbox":
        data = <Inbox />
        break;
      case "sent":
        data = <Sent />
        break;
      default:
        data = <Login />
        break;
    }
    return data;

  }

  // if (params === "sent") {
  //   message = <Sent />
  // }
  // else if (params === "snoozed") {
  //   message = <Snoozed />
  // }
  // else if (params === "draft") {
  //   message = <Draft />
  // }
  // else if (params === "starred") {
  //   message = <Starred />
  // }
  // else {
  //   message = <Inbox />
  // }


  return (
    <section class="inbox" >

      <div class="inbox-menu">

        <div class="inbox-menu-group">

          <div class="inbox-btn-group" >
            <button class="btn-alt">
              <img src={checkbox} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>

            <button class="btn-sm btn-alt">
              <img src={arrow} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>
          </div>

          <button class="btn">
            <img src={refresh} alt="Refresh" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover" />
          </button>

          <button class="btn">
            <img src={more} alt="More" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover" />
          </button>

        </div>

        <div class="inbox-menu-group">

          <button class="btn-lg btn-alt" >
            <div class="inbox-menu-pagination">
              1-50 of 262
            </div>
          </button>

          <div class="inbox-menu-pagination-btn">
            <button class="btn btn-nofill btn-pagination">
              <img src={chevron} alt="Newer" class="btn-icon-sm btn-icon-alt" />
            </button>

            <button class="btn btn-pagination">
              <img src={right} alt="Older" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
            </button>
          </div>

          <div class="inbox-btn-group" >
            <button class="btn-alt">
              <img src={keyboard} alt="Input tools on/off" class="btn-icon-sm btn-icon-alt" />
            </button>

            <button class="btn-sm btn-alt">
              <img src={arrowdrop} alt="Select input tool" class="btn-icon-sm btn-icon-alt" />
            </button>
          </div>
        </div>
      </div>

      <div class="inbox-container">

        <div class="inbox-category">

          <div id="ctg-primary" class="inbox-category-item active">
            <svg class="inbox-category-icon btn-icon btn-icon-sm btn-icon-alt active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg>
            <span class="inbox-category-title">Primary</span>
          </div>

          <div class="inbox-category-item">
            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
            <span class="inbox-category-title">Social</span>
          </div>

          <div class="inbox-category-item">
            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" /></svg>
            <span class="inbox-category-title">Promotions</span>
          </div>

        </div>
        <div class="content">
          {renderComponent(params)}
          {/* {params == "inbox"? <Inbox /> : <Starred />} */}
          {/* <Inbox />
          <Sent /> */}
          {/* <Snoozed /> */}
          {/* <Draft /> */}

        </div>
      </div>
    </section>
  );
}
export default Body