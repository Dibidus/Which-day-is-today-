switch(new Date().getDay('')) {
			case 0: day = "Sunday";
			break;
			case 1: day = "Monday";
			break;
			case 2: day = "Tuesday";
			break;
			case 3: day = "Wednesday";
			break;
			case 4: day = "Thursday";
			break;
			case 5: day = "Friday";
			break;
			case 6: day = "Saturday";
			break;
		}
		document.getElementById('demo').innerHTML = "Today is " + day;


		/*
		The getDay() method returns the weekday as a number between 0 and 6 
		(Sunday=0, Monday=1, Tuesday=2....)
		This exemple uses the weekday number to calculate the weekend name.
		*/