function generateRandomArray(length, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * max) + 1);
    }
    return arr;
  }
  
  function getEvenArray(arr) {
    const evenArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      evenArr.push(arr[i]);
    }
    return evenArr;
  }
  
  function getOddArray(arr) {
    const oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      oddArr.push(arr[i]);
    }
    return oddArr;
  }
  
  function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  function getAverage(arr) {
    return getTotal(arr) / arr.length;
  }
  
  const arr = generateRandomArray(100, 50);
  
  const evenArr = getEvenArray(arr);
  const oddArr = getOddArray(arr);
  
  const evenMin = getMin(evenArr);
  const evenMax = getMax(evenArr);
  const evenTotal = getTotal(evenArr);
  const evenAverage = getAverage(evenArr);
  
  const oddMin = getMin(oddArr);
  const oddMax = getMax(oddArr);
  const oddTotal = getTotal(oddArr);
  const oddAverage = getAverage(oddArr);
  
  let minComparison = '';
  if (evenMin < oddMin) {
    minComparison = 'Min lebih kecil pada array genap';
  } else if (evenMin > oddMin) {
    minComparison = 'Min lebih kecil pada array ganjil';
  } else {
    minComparison = 'Min sama pada kedua array';
  }
  
  let maxComparison = '';
  if (evenMax < oddMax) {
    maxComparison = 'Max lebih kecil pada array genap';
  } else if (evenMax > oddMax) {
    maxComparison = 'Max lebih kecil pada array ganjil';
  } else {
    maxComparison = 'Max sama pada kedua array';
  }
  
  let totalComparison = '';
  if (evenTotal < oddTotal) {
    totalComparison = 'Total lebih kecil pada array genap';
  } else if (evenTotal > oddTotal) {
    totalComparison = 'Total lebih kecil pada array ganjil';
  } else {
    totalComparison = 'Total sama pada kedua array';
  }
  
  let averageComparison = '';
  if (evenAverage < oddAverage) {
        averageComparison = 'Rata-rata lebih kecil pada array genap';
    } else if (evenAverage > oddAverage) {
        averageComparison = 'Rata-rata lebih kecil pada array ganjil';
    } else {
        averageComparison = 'Rata-rata sama pada kedua array';
    }


    console.log('Array dengan jumlah index 100:');
    console.log(arr);

    console.log('\nArray genap dengan jumlah index 50:');
    console.log(evenArr);

    console.log('\nArray ganjil dengan jumlah index 50:');
    console.log(oddArr);

    console.log('\nMin, Max, Total, dan Rata-rata pada array genap: Min: ${evenMin} Max: ${evenMax} Total: ${evenTotal} Rata-rata: ${evenAverage}');

    console.log('\nMin, Max, Total, dan Rata-rata pada array ganjil: Min: ${oddMin} Max: ${oddMax} Total: ${oddTotal} Rata-rata: ${oddAverage}');
    
    console.log('\nPerbandingan nilai: ${minComparison} ${maxComparison} ${totalComparison} ${averageComparison}');