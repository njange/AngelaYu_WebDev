function bmiCalculator (weight, height) {
    
    
    var bmi = (weight/(height*height))
    if (bmi < 18.5 ){
        return underweight;
    }
    else if(bmi < 24.9){
        return normal;
    }
    else {return overweight}
    
    return interpretation;
}