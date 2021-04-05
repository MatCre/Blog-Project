// const gridControls = document.querySelector('.grid-controls input[type="range"]')
// console.log(gridControls);

//   const getColValue = function(){
//     const gridContainer = document.querySelector('.grid-container')
//     let gridStyle = window.getComputedStyle(gridContainer);
//     gridStyle['grid-template-columns'] = "auto auto auto auto";
// };
// //  const colCurrentValue = getColValue();

// //  console.log(colCurrentValue);

const getGridContain = document.querySelector('.grid-container')
getGridContain.innerHTML =`
<div>
    <div class="blogEntryHeader">
        <h4>Grid Layout</h4>
    </div>
        <label for="grid-container">Grid Container</label>
            <div class="grid-container">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
            </div>
    <div class="grid-controls">
            <label for="setColumns">
              Columns
            </label>
        <input type="range" name="setColumns" min="1" max="4" step="1">
    </div>
    <style>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto ;
    }
    .grid-item {
        background-color: rgba(54, 53, 53, 0.747);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
      }
    </style>
</div>`
console.log(getGridContain['grid-template-columns']);