const tabs = document.querySelector('.tabs');
const navBarButtons = document.querySelector('.navbar')
export const tabButtons = navBarButtons.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

export function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tab panel and show it
  const { id } = event.currentTarget;

  /* Method One 
  
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */

  // Method 2 - Find in the array of tabPanels
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}


