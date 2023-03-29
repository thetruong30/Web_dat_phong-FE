
    var arr = [
        "img/slide-1.jpg",
        "img/slide-2.jpg",
        "img/slide-3.jpg",

    ];
    var index = 0;
    function pre() {
        index--;
        if (index < 0) index = arr.length - 1;
        var img = document.getElementById("hinh");
        img.src = arr[index];
    }
    function next() {
        index++;
        if (index == arr.length) index = 0;
        var img = document.getElementById("hinh");
        img.src = arr[index];
    }

    setInterval("next()", 3000);

       
       
