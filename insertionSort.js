  function insertionSort(arr, n) {
  var n = arr.length;
  i,j :integer
  begin
        for (i=1; i<n; ++i)
        {
            var key = arr[i];
            var j = i-1;

            while (j>=0 arr[j] > key)
            {
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }

      return arr;
   };