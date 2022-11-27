window.onload = function () {
    function getIdName(id, tagName) {
        if (tagName !== 0) {
            return document.getElementById(id).getElementsByTagName(tagName);
        } else {
            return document.getElementById(id);
        }
    }

    function rotation(json) {
        let i;
        let that;
        let start = 0;
        let index = 0;
        let timer = null;
        let option = {
            li: "li",
            wrapperId: "",
            imageId: "",
            buttonId: "",
            ms: 3000
        };

        for (i in option) {
            if (json[i] !== undefined) {
                option[i] = json[i];
            }
        }

        let wrapper = getIdName(option.wrapperId, 0);
        let images = getIdName(option.imageId, option.li);
        let buttons = getIdName(option.buttonId, option.li);

        function scrollImage(that) {
            if (that >= 0) {
                index = that;
            } else {
                if (start === 0) {
                    index++;
                } else {
                    index--;
                    start = 0;
                }
            }

            if (index >= buttons.length) index = 0;

            if (index < 0) index = buttons.length - 1;

            for (let j = 0; j < buttons.length; j++) {
                images[j].className = "";
                buttons[j].className = "";
            }

            images[index].className = "current";
            buttons[index].className = "on";
        }

        images[index].className = "current";
        buttons[index].className = "on";

        for (i = 0; i < buttons.length; i++) {
            buttons[i].index = i;

            buttons[i].onclick = function () {
                that = this.index;
                scrollImage(that);
            }
        }

        timer = setInterval(scrollImage, option.ms);

        wrapper.onmouseover = function () {
            clearInterval(timer);
        }

        wrapper.onmouseout = function () {
            timer = setInterval(scrollImage, option.ms);
        }
    }

    rotation({
        wrapperId: "focus_wrapper",
        imageId: "focus_image",
        buttonId: "focus_button"
    });
}
