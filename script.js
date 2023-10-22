function typeText(targetId, text, delay) {
    const targetElement = document.getElementById(targetId);
    let index = 0;

    function type() {
        if (index < text.length) {
            targetElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}

function myFunction() {
    typeText('screen1', 'Lorem ipsum, doloLorem ipsum, dolor sit amet consectetur adipisicing elit. Natus soluta praesentium molestiae aut quia. Unde error numquam recusandae assumenda culpa facilis corporis harum mollitia, nihil cumque quaerat molestias natus accusamus! Itaque, iusto voluptates. Excepturi, temporibus! Ab possimus accusamus veniam necessitatibus, nobis dolore excepturi facilis! Cumque quasi obcaecati rem assumenda facilis doloremque? Magni sed assumenda animi ab repellat, quos voluptas illum amet aut sapiente quae harum recusandae reiciendis voluptatem! Fuga voluptas repudiandae tempore hic quia voluptatum minus soluta cupiditate! Minus alias nihil, quasi a vero hic voluptatibus voluptas eos esse aperiam consectetur delectus architecto, tempore accusantium asperiores beatae! Accusantium, dicta qui.r sit amet consectetur adipisicing elit. Natus soluta praesentium molestiae aut quia. Unde error numquam recusandae assumenda culpa facilis corporis harum mollitia, nihil cumque quaerat molestias natus accusamus! Itaque, iusto voluptates. Excepturi, temporibus! Ab possimus accusamus veniam necessitatibus, nobis dolore excepturi facilis! Cumque quasi obcaecati rem assumenda facilis doloremque? Magni sed assumenda animi ab repellat, quos voluptas illum amet aut sapiente quae harum recusandae reiciendis voluptatem! Fuga voluptas repudiandae tempore hic quia voluptatum minus soluta cupiditate! Minus alias nihil, quasi a vero hic voluptatibus voluptas eos esse aperiam consectetur delectus architecto, tempore accusantium asperiores beatae! Accusantium, dicta qui.', 10); // You can adjust the delay (in milliseconds) for typing speed
}

myFunction();