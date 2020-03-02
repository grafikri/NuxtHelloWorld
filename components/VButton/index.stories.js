import VButton from "./index.vue";
import { storiesOf } from "@storybook/vue";

// export default { title: "Button" };

storiesOf("Buttons", module).add("With text", () => ({
  components: { VButton },
  template: "<VButton>This is a text</VButton>"
}));
