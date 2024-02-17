export default function TabModule() {
    let tab = document.querySelectorAll(".tabJS");
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                // tPanel[0].classList.add('open');
                $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            // tPanel[a].classList.remove('open');
                            $(tPanel[a]).slideUp(400);
                        }
                        tBtn[i].classList.add("active");
                        // tPanel[i].classList.add('open');
                        $(tPanel[i]).slideDown(400);
                    }
                }
            }
        });
    }
    // tab Next, Prev
    // 
    if ($(document).find('body.home')) {
        let countCorrect = 0;
        let currentTab = 0;
        const tabBlock = document.querySelector(".tabsJS")
        const mainElement = document.querySelector('main');
        $(".monaMessageFromAdmin").slideUp();

        if (tabBlock) {
            const prev = tabBlock.querySelector(".prev")
            const next = tabBlock.querySelector(".next")
            const submit = tabBlock.querySelector(".eye")
            const list = tabBlock.querySelectorAll(".exe-body")
            const checker = tabBlock.querySelector(".homes-exe-ctn");

            // next.classList.add("disable")
            document.querySelectorAll(".tabs-content")[0].style.display = 'block';
            document.querySelectorAll(".tabs-content")[0].classList.add("open")

            function showTab(tabNumber) {
                const tabs = tabBlock.querySelectorAll('.tabs-content');
                tabs.forEach((item, index) => {
                    if (index === tabNumber) {
                        item.style.display = 'block';
                        item.classList.add("open")
                        // thêm active cho Icon check
                        document.getElementById(`Icon${index + 1}`).classList.add('active');
                        if (item.classList.contains("monaDone")) {
                            console.log("co");
                            checker.setAttribute("data-checker", "yes")
                        } else {
                            checker.setAttribute("data-checker", "no")
                        }
                    } else {
                        item.style.display = 'none';
                        item.classList.remove("open")
                        // xóa active cho Icon check
                        document.getElementById(`Icon${index + 1}`).classList.remove('active');
                    }
                    checkDoneOpen(item);
                });
                // Tính tỉ lệ hoàn thành dựa trên số tab đã qua
                const progress = ((tabNumber) / (tabs.length - 1)) * 100;
                const progressBar = tabBlock.querySelector('.homes-exe-line .progress');
                progressBar.setAttribute("style", "--progress:" + progress + '%')
                // 

                currentTab = tabNumber;
            }

            // Noti


            function nextTab() {
                const totalTabs = tabBlock.querySelectorAll('.tabs-content').length;
                if (currentTab === totalTabs - 1) {
                    // Nếu đang ở tab cuối cùng thì không chuyển tiếp
                    console.log("done");
                }
                currentTab = (currentTab + 1) % totalTabs;
                showTab(currentTab);
            }
            function Confetti() {
                const confet = document.createElement("canvas")
                confet.setAttribute("id", "confetti")
                const monaMe = document.querySelector(".homes-exe")
                monaMe.appendChild(confet);
                //canvas init
                var canvas = document.getElementById("confetti");
                var ctx = canvas.getContext("2d");

                //canvas dimensions
                var W = window.innerWidth;
                var H = window.innerHeight;
                canvas.width = W;
                canvas.height = H;

                //particles
                var mp = 150; //max particles
                var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
                var colors = [
                    [238, 96, 169],
                    [68, 213, 217],
                    [245, 187, 152],
                    [144, 148, 188],
                    [235, 234, 77]
                ];
                var angles = [
                    [4, 0, 4, 4],
                    [2, 2, 0, 4],
                    [0, 4, 2, 2],
                    [0, 4, 4, 4]
                ]
                var particles = [];
                for (var i = 0; i < mp; i++) {
                    particles.push({
                        x: Math.random() * W, //x-coordinate
                        y: Math.random() * H, //y-coordinate
                        r: Math.random() * 4 + 1, //radius
                        d: Math.random() * mp, //density
                        l: Math.floor(Math.random() * 65 + -30), // line angle
                        a: angles[Math.floor(Math.random() * angles.length)], // triangle rotation
                        c: colors[Math.floor(Math.random() * colors.length)], // color
                        t: types[Math.floor(Math.random() * types.length)] //shape 
                    })
                }

                function draw() {
                    ctx.clearRect(0, 0, W, H);


                    for (var i = 0; i < mp; i++) {
                        var p = particles[i];
                        var op = (p.r <= 3) ? 0.4 : 0.8;

                        if (p.t == 'circle') {
                            ctx.fillStyle = "rgba(" + p.c + ", " + op + ")";
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                            ctx.fill();
                        } else if (p.t == 'triangle') {
                            ctx.fillStyle = "rgba(" + p.c + ", " + op + ")";
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p.x + (p.r * p.a[0]), p.y + (p.r * p.a[1]));
                            ctx.lineTo(p.x + (p.r * p.a[2]), p.y + (p.r * p.a[3]));
                            ctx.closePath();
                            ctx.fill();
                        } else if (p.t == 'line') {
                            ctx.strokeStyle = "rgba(" + p.c + "," + op + ")";
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p.x + p.l, p.y + (p.r * 5));
                            ctx.lineWidth = 2;
                            ctx.stroke();
                        }

                    }
                    update();
                }



                function update() {

                    for (var i = 0; i < mp; i++) {
                        var p = particles[i];
                        p.y += Math.cos(p.d) + 1 + p.r / 2;
                        p.x += Math.sin(0) * 2;

                        if (p.x > W + 5 || p.x < -5 || p.y > H) {
                            particles[i] = {
                                x: Math.random() * W,
                                y: -10,
                                r: p.r,
                                d: p.d,
                                l: p.l,
                                a: p.a,
                                c: p.c,
                                t: p.t
                            };
                        }
                    }
                }

                //animation loop
                setInterval(draw, 23);

            }
            function previousTab() {
                if (currentTab === 0) {
                    return; // Nếu đang ở tab đầu tiên thì không lùi
                }
                const totalTabs = tabBlock.querySelectorAll('.tabs-content').length;
                currentTab = (currentTab - 1 + totalTabs) % totalTabs;
                showTab(currentTab);
                // showImg();
            }
            function updateCheckIcon() {
                const tabIcons = tabBlock.querySelectorAll('.homes-exe-it');

                tabIcons.forEach((icon, index) => {
                    const questions = tabBlock.querySelectorAll(`#c${index + 1} input`);
                    let isAnyChecked = false;
                    questions.forEach(question => {
                        if (question.checked) {
                            isAnyChecked = true;
                        }
                    });

                    if (isAnyChecked) {
                        icon.classList.add("checked"); // Đổi màu biểu tượng check thành xanh khi có câu trả lời được chọn
                        // next.classList.add("disable")
                    } else {
                        icon.classList.remove("checked"); // Màu xám khi không có câu trả lời nào được chọn
                        // next.classList.remove("disable")
                    }
                });
            }
            function showImg(correct) {
                const tabBlock = document.querySelector(".tabsJS")
                const imgList = tabBlock.querySelector(".homes-exe-img")
                const tabs = tabBlock.querySelectorAll('.tabs-img');
                tabs.forEach((item, index) => {
                    if ((index + 1) == correct) {
                        $(".tabs-default").remove();
                        $(".homes-exe-img .rubik").addClass("rotate");
                        item.style.display = 'block';
                        setTimeout(() => {
                            $(".homes-exe-img .rubik").removeClass("rotate");
                        }, 300)
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
            function Noti({ icon = 'success', text, title, timer = 4000, redirect = '' }) {
                var noti_con = document.querySelector('.noti_con');
                if (!noti_con) {
                    var noti_con = document.createElement('div');
                    noti_con.setAttribute('class', 'noti_con');
                    mainElement.appendChild(noti_con);
                }
                var noti_alert = document.createElement('div');
                var noti_icon = document.createElement('div');
                var noti_process = document.createElement('div');
                noti_icon.setAttribute('class', 'noti_icon ' + icon);
                noti_alert.setAttribute('class', 'noti_alert');
                noti_process.setAttribute('class', 'progress active ' + icon);
                noti_alert.innerHTML = '<div class="message"><p class="text1">' + title + '</p><p class="text2">' + text + '</p></div>';
                noti_alert.prepend(noti_icon);
                noti_alert.prepend(noti_process);
                noti_con.prepend(noti_alert);

                if (icon == 'success') {
                    // noti_icon.style.background = '#00b972';
                    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>`;

                } else if (icon == 'info') {
                    // noti_icon.style.background = '#0395FF';
                    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"/></circle></svg>`;

                } else if (icon == 'danger' || icon == 'error') {
                    // noti_icon.style.background = '#FF032C';
                    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>`;
                } else {
                    // noti_icon.style.background = '#00b972';
                    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>`;
                }

                setTimeout(() => {
                    noti_alert.classList.add('active');
                }, 100);

                setTimeout(() => {
                    noti_alert.classList.remove('active');
                }, timer);

                setTimeout(() => {
                    noti_alert.remove();
                }, timer + 2000);
            }
            function getResultsOpen() {
                var tabsContent = document.querySelector('.tabs-content.open'); // Replace with your actual class name
                var form = tabsContent.querySelector('form');
                var checkedValues = [];

                // Check if a form is found
                if (form) {
                    // Loop through all form elements
                    for (var i = 0; i < form.elements.length; i++) {
                        var element = form.elements[i];

                        // Check if the element is a checkbox or radio button and is checked
                        if ((element.type === 'checkbox' || element.type === 'radio') && element.checked) {
                            checkedValues.push(element.value);
                        }
                    }
                }

                return checkedValues.join(',');
            }
            function findDifference(string1, string2) {
                const array1 = string1.split(',').map(value => value.trim());
                const array2 = string2.split(',').map(value => value.trim());

                const difference = array1.filter(value => !array2.includes(value));

                return difference;
            }

            function aJax() {
                var $this = $('.tabs-content.open');
                var $form = $this.find('.formQuestion');
                var numberTab = $this.data('number');
                var result = $this.data('result');
                var question_id = $this.data('question_id');
                var processing = $form;
                var formData = new FormData($form[0]);

                var formDataLize = getResultsOpen();
                const displayDataLize = findDifference(formDataLize, result);
                const displayResult = result.split(',').map(value => value.trim());
                if (!processing.hasClass("processing")) {
                    if (formDataLize == '') {
                        Noti({
                            text: mona_ajax_url.message_question_empty,
                            title: mona_ajax_url.title,
                            icon: "danger",
                            timer: 5000,
                        });
                    } else {

                        if (displayResult.length > 0) {
                            displayResult.forEach(element => {
                                var elementKey = '#' + question_id + '_' + element;
                                $(elementKey).closest('.tabs-content').addClass('monaDone');
                                $(elementKey).addClass('monaTrue');
                            });
                        }
                        if (displayDataLize.length > 0) {
                            displayDataLize.forEach(element => {
                                var elementKey = '#' + question_id + '_' + element;
                                $(elementKey).closest('.tabs-content').addClass('monaDone');
                                $(elementKey).addClass('monaFalse');
                            });
                        }

                        if (formDataLize == result) {
                            ++countCorrect;
                            showImg(countCorrect);
                            $('#Icon' + numberTab).addClass('monaIconTrue');
                        } else {
                            $('#Icon' + numberTab).addClass('monaIconFalse');
                        }

                        const totalTabs = tabBlock.querySelectorAll('.tabs-content').length;
                        const totalDone = tabBlock.querySelectorAll('.tabs-content.monaDone').length;
                        if (totalTabs != totalDone) {
                            // nextTab();
                            checkDoneOpen();

                            const tabIcons = tabBlock.querySelectorAll('.button');
                            tabIcons.forEach(item => {
                                if (item.classList.contains("active")) {
                                    centerButton(item)
                                }
                            })
                        } else {
                            setTimeout(() => {
                                console.log("Thong Diep");
                                $(".homes-exe-ctn ").fadeOut(300);
                                $(".homes-exe-img").addClass("done");
                                Confetti();
                                setTimeout(() => {
                                    $(".homes-exe-img").fadeOut(500);
                                    // $(".monaMessageFromAdmin").addClass("done");
                                    setTimeout(() => {
                                        $(".monaMessageFromAdmin").fadeIn(500);
                                    }, 500)
                                }, 300)
                            },2000)
                        }
                    }
                    processing.removeClass("processing");
                }

                // formData.append('format', 'question');
                // if (!processing.hasClass("processing")) {
                //     formData.append("action", "mona_homework_result");
                //     jQuery.ajax({
                //         url: mona_ajax_url.ajaxURL,
                //         type: "post",
                //         data: formData,
                //         format: 'question',
                //         processData: false,
                //         contentType: false,
                //         error: function (request) {
                //             processing.removeClass("processing");
                //         },
                //         beforeSend: function () {
                //             $(".mona-error").fadeOut();
                //             processing.addClass("processing");
                //         },
                //         success: function (result) {
                //             if (result.success) {
                //                 // Noti({
                //                 //     text: result.data.message,
                //                 //     title: result.data.title,
                //                 //     icon: "success",
                //                 //     timer: 5000,
                //                 // });
                //                 if (result.data.questionaire != '') {
                //                     console.log(result.data.flag);
                //                     $.each(result.data.questionaire, function (key, val) {
                //                         $('#' + key).closest('.tabs-content').addClass('monaDone');
                //                         $('#' + key).addClass(val == true ? 'monaTrue' : 'monaFalse');
                //                     });
                //                     $this.fadeOut();
                //                     // đổi màu icon 
                //                     if (result.data.flag == true) {
                //                         ++countCorrect;

                //                         showImg(countCorrect);
                //                         $('#Icon' + numberTab).addClass('monaIconTrue');
                //                     } else {
                //                         $('#Icon' + numberTab).addClass('monaIconFalse');
                //                     }
                //                     // $('.tabs-control .btn.next').removeClass('disable')
                //                     console.log('countCorrect: ' + countCorrect);
                //                 }
                //                 const totalTabs = tabBlock.querySelectorAll('.tabs-content').length;
                //                 const totalDone = tabBlock.querySelectorAll('.tabs-content.monaDone').length;
                //                 if (totalTabs != totalDone) {
                //                     // nextTab();
                //                     checkDoneOpen();

                //                     const tabIcons = tabBlock.querySelectorAll('.button');
                //                     tabIcons.forEach(item => {
                //                         if (item.classList.contains("active")) {
                //                             centerButton(item)
                //                         }
                //                     })
                //                 } else {
                //                     console.log("Thong Diep");
                //                     $(".homes-exe-ctn ").fadeOut(300);
                //                     $(".homes-exe-img").addClass("done");
                //                     Confetti();
                //                     setTimeout(() => {
                //                         $(".homes-exe-img").fadeOut(500);
                //                         // $(".monaMessageFromAdmin").addClass("done");
                //                         setTimeout(() => {
                //                             $(".monaMessageFromAdmin").fadeIn(500);
                //                         }, 500)
                //                     }, 300)
                //                 }

                //             } else {
                //                 Noti({
                //                     text: result.data.message,
                //                     title: result.data.title,
                //                     icon: "danger",
                //                     timer: 5000,
                //                 });
                //                 // if (result.data.error) {
                //                 //     $.each(result.data.error, function (key, val) {
                //                 //         $("#formLogin ." + key).html(val);
                //                 //         $("#formLogin ." + key).fadeIn();
                //                 //     });
                //                 // }
                //             }
                //             processing.removeClass("processing");
                //         },
                //     });
                // }
            }

            function checkDoneOpen() {
                const tabsC = tabBlock.querySelectorAll(".tabs-content.open")
                tabsC.forEach(item => {
                    if (item.classList.contains("monaDone")) {
                        submit.style.display = "none",
                            next.style.display = "block";
                    } else {
                        next.style.display = "none";
                        submit.style.display = "block"
                    }
                })
            }
            // Hiển thị tab đầu tiên khi trang được tải
            // click

            if (list) {
                list.forEach(lists => {
                    const input = lists.querySelectorAll(".exe-child  input")
                    input.forEach(items => {
                        items.addEventListener('click', () => {
                            updateCheckIcon();
                        })
                    })
                })
            }
            prev.addEventListener('click', (e) => {
                e.preventDefault();
                previousTab();
                const tabIcons = tabBlock.querySelectorAll('.button');
                tabIcons.forEach(item => {
                    if (item.classList.contains("active")) {
                        centerButton(item)
                    }
                })
                checkDoneOpen();
            })
            submit.addEventListener('click', (e) => {
                e.preventDefault();
                aJax();

            })
            next.addEventListener('click', (e) => {
                e.preventDefault();
                // submitBtn.click();
                // nextTab();
                // const tabIcons = tabBlock.querySelectorAll('.button');
                // tabIcons.forEach(item => {
                //   if (item.classList.contains("active")) {
                //     centerButton(item)
                //   }
                // })
                checkDoneOpen();
                nextTab()
            })
            function centerButton(button) {
                const screenWidth = window.innerWidth;
                const buttonRect = button.getBoundingClientRect();
                const buttonCenter = buttonRect.left + buttonRect.width / 2;

                const scrollContainer = document.querySelector('.scroll');
                const scrollAmount = buttonCenter - screenWidth / 2;
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }

    }


}
