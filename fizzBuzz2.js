for (var count = 1; count <=100; count++){
        if (count % 15 == 0)
            console.log("fizz buzz");
        else if (count % 5 == 0)
            console.log("buzz");
        else if (count % 3 == 0)
            console.log("fizz");
        else
            console.log(count);
    }
