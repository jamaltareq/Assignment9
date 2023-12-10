let contentQuote = ["نحن لا نستسلم، ننتصر أو نموت، وهذه ليست النهاية، بل سيكون عليكم أن تحاربوا الجيل القادم والأجيال التي تليه، أما أنا فإن عمري سيكون أطول من عمر شانقي", "أسكنتُ هنا من يثبتون في البر ويبطشون في البحر، وخير من يُؤتـَمنون على المسجد الأقصى وعلى هذه المدينة", " بسم الله الرحمن الرحيم، من خالد بن الوليد إلى ملوك فارس، فالحمد لله الذي حل نظامكم ووهن كيدكم، وفرق كلمتكم... فأسلموا وإلا فأدوا الجزية وإلا فقد جئتكم بقوم يحبون الموت كما تحبون الحياة", "اتتوعدنا بما ننتظر يا ابن اليهودية"]
let saidarb = document.getElementById("saidarb")
let said = ["-عمر المختار-", "-صلاح الدين الايوبي-", "-خالد ابن الوليد-", "-ابوعبيده-"]
let contentq = document.getElementById("contentq")
let image = document.getElementById("image")
let images = ["image/1.jfif", "image/2.jfif", "image/3.jfif", "image/1.png"]



function qoute() {
    var ran = Math.trunc(Math.random() * contentQuote.length)


    contentq.innerHTML = contentQuote[ran]
    saidarb.innerHTML = said[ran]
    image.style.backgroundImage = `url(../${images[ran]})`
}