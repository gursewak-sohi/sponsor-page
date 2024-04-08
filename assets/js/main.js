document.addEventListener('DOMContentLoaded', function() {
  // This function sets up the toggle functionality for each container
  function setupToggleForContainer(container) {
      const list = container.querySelector('ul');
      const listItems = Array.from(list.children);
      const visibleItemCount = 5; // Number of items to show initially

      // Check if there are more than 6 items
      if (listItems.length > 6) {
          // Hide all items beyond the first visibleItemCount
          listItems.forEach((item, index) => {
              if (index >= visibleItemCount) {
                  item.classList.add('hidden');
              }
          });

          // Create and append the "and more.." item
          const moreItem = document.createElement('li');
          moreItem.classList.add('flex', 'gap-3');
          moreItem.innerHTML = `
              <span class="flex-shrink-0">
                  <img class="w-5 md:w-[22px] h-5 md:h-[22px] relative top-0.5" src="assets/images/check.svg" alt="check"/>
              </span>
              <span>and more..</span>
          `;
          list.appendChild(moreItem);

          // Find the toggle button and add click event
          const toggleButton = container.querySelector('.toggle-btn');
          toggleButton.classList.remove('hidden'); // Show toggle button
          toggleButton.addEventListener('click', function() {
              // Toggle visibility of items beyond the first visibleItemCount
              listItems.forEach((item, index) => {
                  if (index >= visibleItemCount) {
                      item.classList.toggle('hidden');
                  }
              });

              // Toggle the "and more.." item visibility
              moreItem.classList.toggle('hidden');

              // Update button text and image rotation
              const buttonText = toggleButton.querySelector('span');
              const buttonImage = toggleButton.querySelector('img');
              if (buttonText.textContent.includes('More Info')) {
                  buttonText.textContent = ' Collapse';
                  buttonImage.classList.remove('-rotate-90');
                  buttonImage.classList.add('rotate-90');
              } else {
                  buttonText.textContent = ' More Info';
                  buttonImage.classList.remove('rotate-90');
                  buttonImage.classList.add('-rotate-90');
              }
          });

          // Hide "and more..." initially
          moreItem.classList.add('hidden');
      } else {
          // If there are less than or equal to 6 items, hide the toggle button
          const toggleButton = container.querySelector('.toggle-btn');
          toggleButton.classList.add('hidden');
      }
  }

  // Setup toggle functionality for all containers on the page
  document.querySelectorAll('.toggle-container').forEach(setupToggleForContainer);
});
