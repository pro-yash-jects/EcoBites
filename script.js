function calculateFoodPrint() {
    var items = document.querySelectorAll('input[name="item"]:checked');
    var quantities = document.getElementById('quantities').value.trim().split(',');
    var total = 0;

    if (items.length < 3) {
        document.getElementById('result').innerText = "Please select at least 3 items.";
        return;
    }

    for (var i = 0; i < items.length; i++) {
        // Use a default quantity of 1 if no quantity is specified
        var quantity = quantities[i] ? parseFloat(quantities[i]) : 1;
        var itemName = items[i].value;
        
        // Switch-case for different food items
        switch (itemName) {
            case 'rice':
                total += quantity * 0.5; // Carbon footprint for rice
                break;
            case 'wheat':
                total += quantity * 0.7; // Carbon footprint for wheat
                break;
            case 'dal':
                total += quantity * 0.6; // Carbon footprint for dal
                break;
            case 'vegetables':
                total += quantity * 0.3; // Carbon footprint for vegetables
                break;
            case 'fruits':
                total += quantity * 0.4; // Carbon footprint for fruits
                break;
            case 'milk':
                total += quantity * 0.8; // Carbon footprint for milk
                break;
            case 'curd':
                total += quantity * 0.7; // Carbon footprint for curd
                break;
            case 'paneer':
                total += quantity * 0.9; // Carbon footprint for paneer
                break;
            case 'tea':
                total += quantity * 0.3; // Carbon footprint for tea
                break;
            case 'coffee':
                total += quantity * 0.5; // Carbon footprint for coffee
                break;
            // Add more cases for other food items as needed
            default:
                // Default carbon footprint if no specific value is defined
                total += quantity * 0.5;
                break;
        }
    }

    document.getElementById('result').innerText = "Your food print is: " + total.toFixed(2)+"kg of CO2";
}
