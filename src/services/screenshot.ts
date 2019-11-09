import { UpploadService } from "../service";
import { HandlersParams } from "../helpers/interfaces";
import { translate } from "../helpers/i18n";

export default class Screenshot extends UpploadService {
  name = "screenshot";
  icon = "fas fa-desktop";
  color = "#e67e22";

  template = () => {
    return `
      <form class="${this.class("form")}">
        <input class="${this.class(
          "input"
        )}" type="search" placeholder="Enter a URL">
        <button type="submit" style="background: ${
          this.color
        }"><i class="fas fa-camera"></i>${translate(
      "services.screenshot.button"
    )}</button>
      </form>
    `;
  };

  handlers = ({ next }: HandlersParams) => {};

  fetch(url: string) {
    return new Promise((resolve, reject) => {
      window
        .fetch("")
        .then(response => response.blob())
        .then(blob => resolve(blob))
        .catch(error => reject(error));
    });
  }
}
