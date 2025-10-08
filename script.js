function insert_Row() {
    //Write your code here
	 // Get the table element by its ID
    const table = document.getElementById("sampleTable");
    
    // Insert a new row at the top (index 0)
    const newRow = table.insertRow(0);
    
    // Insert two new cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Set text content for the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
  
}
