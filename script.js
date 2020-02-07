const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const quote = document.getElementById('quote');
const overlay = document.getElementById('overlay');

const quotes = [
    "Không bao giờ được từ bỏ ước mơ chỉ vì mất quá nhiều thời gian để thực hiện. Dù sao thì thời gian cũng sẽ trôi đi mà thôi. – Earl Nightingale",
    "Chịu trách nhiệm cho đời bạn. Cần nhớ rằng chính bạn chứ không phải ai khác là người sẽ đưa bạn đến nơi bạn muốn đến. – Les Brown",
    "Cách duy nhất để tạo nên sự nghiệp vĩ đại là yêu những gì bạn làm. Nếu bạn chưa tìm ra nó, hãy tiếp tục tìm kiếm. Đừng dừng lại. – Steve Jobs",
    "Chúng ta phải lựa chọn: nỗi đau của sự kỷ luật hay nỗi đau của sự hối hận. – Jim Rohn",
    "Bắt đầu từ nơi bạn đứng. Sử dụng những gì bạn có. Làm những gì bạn có thể. – Arthur Ashe",
    "Cuộc sống không phải để sợ, mà là để hiểu. Đây chính là lúc chúng ta cần phải tìm hiểu nhiều hơn về cuộc sống để làm vơi bớt mọi nỗi sợ hãi. – Marie Curie",
    "Trong trò chơi của cuộc sống, trước khi bạn nhận được bất cứ cái gì, bạn phải cho đi một thứ gì đó! – Zig Ziglar",
    "Mỗi người có thể có những lý do khác nhau để sống cuộc sống của chính họ. Bạn không thể quy chụp tất cả những lý do đó đều giống như nhau. – Kevin Spacey",
    "Hôm nay đầy rẫy những khó khăn, và ngày mai cũng không có điều gì dễ dàng. Nhưng sau ngày mai, mọi thứ sẽ trở nên tốt đẹp. – Jack Ma",
    "Luôn luôn hãy mở to đôi mắt. Hãy quan sát khắp mọi thứ xung quanh. Bởi vì tất cả những gì bạn thấy đều có thể truyền cảm hứng cho bạn. – Grace Coddington",
    "Không có con đường nào dẫn đến hạnh phúc. Hạnh phúc là một con đường. – Thích Nhất Hạnh",
    "Hãy xây nên giấc mơ của bạn, nếu không thì người khác sẽ thuê bạn xây giấc mơ của họ. – Farrah Gray",
    "Để thành công, khao khát thành công của bạn phải lớn hơn nỗi sợ thất bại. – Bill Cosby",
    "Đừng sợ đấu tranh cho những điều bạn tin tưởng, cho dù điều đó đồng nghĩa với việc bạn chỉ có một mình. – Andy Biersack",
    "Không một ai viết ra một kế hoạch khiến bản thân trở nên trắng tay, mập ú, lười biếng hay ngu ngốc. Đó chỉ là những gì xảy đến khi bạn không có một kế hoạch cho mình. – Larry Winget",
    "Tôi biết ơn những người đã nói KHÔNG với tôi. Bởi nhờ họ, tôi đã tự mình làm điều đó. – Albert Einstein",
    "Nếu có thứ gì đó khiến bạn sợ hãi, đó cũng có thể là thứ rất đáng để trải nghiệm. – Seth Godin",
    "Cái chết không phải là điều mất mát lớn nhất trong cuộc đời. Sự mất mát lớn nhất là bạn để tâm hồn tàn lụi ngay khi còn sống. – Norman Kusin",
    "Thay đổi sẽ không đến nếu chúng ta trông chờ vào người khác hay đợi thời điểm khác. Chúng ta chính là sự thay đổi mà chúng ta đang tìm kiếm. – Barack Obama",
    "Giấc mơ không phải là thứ bạn nhìn thấy khi say ngủ, đó là những thứ khiến bạn không thể chợp mắt. – A.P.J. Abdul Kalam",
    "Đừng sống cùng một năm đến 75 lần và gọi đó là cuộc đời. – Robin Sharma",
    "Trong thời đại này, trừ khi bị lũ lụt cuốn trôi hết tài sản, còn nếu bạn nghèo là do bạn lười. – Sống thực tế giữa đời thực dụng",
    "Đừng có mong đợi một cuộc đời không rắc rối. Làm gì có chuyện ấy! Thay vì vậy, hãy mong đợi một cuộc đời với toàn những rắc rối dễ thương đi! – Mark Manson",
    "Trong sự đương đầu giữa dòng suối và hòn đá, dòng suối luôn luôn thắng, không phải qua sức mạnh mà bằng sự bền bỉ. – H. Jackson Brown",
    "Bạn sinh ra là một bản gốc, đừng chết như một bản sao. – John Masson",
    "Ngày hôm nay nếu bạn lãng phí đồng nghĩa với việc bạn bóp chết quá khứ và vứt bỏ ngày mai. – Thư viện Harvard"
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote;

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear;

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

window.onload = function() {
    overlay.style.opacity = '0';
    setInterval(updateCountdown, 1000);
}