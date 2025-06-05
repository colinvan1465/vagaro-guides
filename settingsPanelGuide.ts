import { GuideConfig } from "./types/guides.types";

export const settingsPanelGuide: GuideConfig = {
  id: "settings-panel",
  name: "Settings Panel Tour - settingsPanelGuid.ts",
  description: "REMOTE:Learn about the settings panel and its features",
  steps: [
    {
      id: "intro",
      title: "Settings Panel Overview",
      description:
        "The settings panel contains three important sections: Settings, Pages, and Components. Let's explore each one!",
      target: {
        selector: ".panel-tabs",
      },
      validation: {
        type: "custom",
        customValidator: () => true,
      },
      position: "right",
      highlight: true,
      dimBackground: true,
      showNextButton: true,
    },
    {
      id: "settings-tab",
      title: "Settings Tab",
      description:
        "Click here to access general settings, site styling, domains, and other configuration options for your website.",
      target: {
        selector: ".panel-tabs .tab-button:nth-child(1)",
      },
      validation: {
        type: "click",
        selector: ".panel-tabs .tab-button:nth-child(1)",
      },
      position: "bottom",
      highlight: true,
      dimBackground: true,
      onEnter: () => {
        console.log("Highlighting settings tab");
        // Programmatically click the settings tab to ensure content is visible
        const settingsTab = document.querySelector(
          ".panel-tabs .tab-button:nth-child(1)"
        ) as HTMLElement;
        if (settingsTab && !settingsTab.classList.contains("selected")) {
          settingsTab.click();
        }
      },
    },
    {
      id: "settings-content",
      title: "Settings Options",
      description:
        "Here you can configure site colors, fonts, SEO settings, and more. Each option helps customize your website's appearance and behavior.",
      target: {
        selector: "#settings-content",
      },
      validation: {
        type: "custom",
        customValidator: () => true,
      },
      position: "right",
      highlight: true,
      dimBackground: true,
      showNextButton: true,
    },
    {
      id: "pages-tab",
      title: "Pages Tab",
      description:
        "Click here to manage your website pages - add new pages, edit existing ones, and organize your site structure.",
      target: {
        selector: ".panel-tabs .tab-button:nth-child(2)",
      },
      validation: {
        type: "click",
        selector: ".panel-tabs .tab-button:nth-child(2)",
      },
      position: "bottom",
      highlight: true,
      dimBackground: true,
      onEnter: () => {
        // Programmatically click the pages tab to ensure content is visible
        setTimeout(() => {
          const pagesTab = document.querySelector(
            ".panel-tabs .tab-button:nth-child(2)"
          ) as HTMLElement;
          if (pagesTab && !pagesTab.classList.contains("selected")) {
            pagesTab.click();
          }
        }, 100);
      },
    },
    {
      id: "pages-content",
      title: "Page Management",
      description:
        "Create, edit, and organize your website pages here. You can set page titles, URLs, and manage the navigation structure.",
      target: {
        selector: ".page-list-container",
      },
      validation: {
        type: "custom",
        customValidator: () => true,
      },
      position: "right",
      highlight: true,
      dimBackground: true,
      showNextButton: true,
    },
    {
      id: "components-tab",
      title: "Components Tab",
      description:
        "Click here to access the component library - drag and drop elements like text, images, buttons, and more onto your pages.",
      target: {
        selector: ".panel-tabs .tab-button:nth-child(3)",
      },
      validation: {
        type: "click",
        selector: ".panel-tabs .tab-button:nth-child(3)",
      },
      position: "bottom",
      highlight: true,
      dimBackground: true,
      onEnter: () => {
        // Programmatically click the components tab to ensure content is visible
        setTimeout(() => {
          const componentsTab = document.querySelector(
            ".panel-tabs .tab-button:nth-child(3)"
          ) as HTMLElement;
          if (componentsTab && !componentsTab.classList.contains("selected")) {
            componentsTab.click();
          }
        }, 100);
      },
    },
    {
      id: "design-editor-content",
      title: "Design Editor",
      description:
        "Browse through various components you can add to your pages. Simply drag any component onto your canvas to start building!",
      target: {
        selector: ".component-content",
      },
      validation: {
        type: "custom",
        customValidator: () => true,
      },
      position: "right",
      highlight: true,
      dimBackground: true,
      showNextButton: true,
    },
    {
      id: "completion",
      title: "Great Job!",
      description:
        "You now know how to navigate the settings panel. Use these tools to customize your website exactly how you want it!",
      target: {
        selector: ".panel-tabs",
      },
      validation: {
        type: "custom",
        customValidator: () => true,
      },
      position: "right",
      highlight: true,
      dimBackground: true,
      showNextButton: true,
    },
  ],
  completionMessage:
    "You've completed the settings panel tour! Start exploring these features to build your perfect website.",
  analytics: {
    category: "settings-panel-tour",
    trackSteps: true,
  },
};
