const collapsableElem = document.querySelectorAll(".collapse");

export const collapseElemOnBlur = () => {
    
    collapsableElem.forEach(curElem => {
        document.addEventListener("click", (e) => {
          if (!curElem.contains(e.target)) {
            curElem.querySelector("input").checked = false;
          }
        });
    });
    
    return true;
};