// IDの取得
let header = document.getElementById('header');
let han = document.getElementById('han');
let btn = document.getElementById('btn');
let re = document.getElementById('re');
let back = document.getElementById('back');
let gu = document.getElementById('gu');
let choki = document.getElementById('choki');
let pa = document.getElementById('pa');

// ジャンケンの手
const GU = 1;
const CHOKI = 2;
const PA = 3;


// グーボタン
gu.addEventListener('click',janken_gu);
    function janken_gu() {
        // ランダムで番号を決める
        let com = Math.floor(Math.random() * 3 + 1); 

        // コンピュータの手の名前
        let comHandName = "";
        let hand = "";
        switch (com) {
            case GU:
                hand = "グー！";
                comHandName = "あいこで？";
                header.style.color = "black"
                header.style.backgroundColor = "yellow"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/gu2.png');
                break;
            case CHOKI:
                hand = "チョキ！";
                comHandName = "きみの、勝ちニャ…";
                header.style.color = "white"
                header.style.backgroundColor = "red"
                header.style.letterSpacing = "0.5em";
                han.setAttribute('src','public/images/hand/choki2.png');
                re.style.display = "block";
                back.style.display = "block";
                btn.style.display = "none";
                break;
            case PA:
                hand = "パー！";
                comHandName = "出直しニャ！";
                header.style.color = "black"
                header.style.backgroundColor = "skyblue"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/pa2.png');
                re.style.display = "block";
                back.style.display = "block";
                btn.style.display = "none";
                break;
        }

        // 結果の表示
        header.innerHTML = hand + "<br>" +comHandName;
    }

// チョキボタン
choki.addEventListener('click',janken_choki);
    function janken_choki() {
        // ランダムで番号を決める
        let com = Math.floor(Math.random() * 3 + 1); 

        // コンピュータの手の名前
        let comHandName = "";
        let hand = "";
        switch (com) {
            case GU:
                hand = "グー！";
                comHandName = "出直しニャ！";
                header.style.color = "black"
                header.style.backgroundColor = "skyblue"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/gu2.png');
                re.style.display = "block";
                back.style.display = "block";
                btn.style.display = "none";
                break;
            case CHOKI:
                hand = "チョキ！";
                comHandName = "あいこで？";
                header.style.color = "black"
                header.style.backgroundColor = "yellow"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/choki2.png');
                break;
            case PA:
                hand = "パー！";
                comHandName = "きみの、勝ちニャ…";
                header.style.color = "white"
                header.style.backgroundColor = "red"
                header.style.letterSpacing = "0.5em";
                han.setAttribute('src','public/images/hand/pa2.png');
                re.style.display = "block";
                back.style.display = "block";        
                btn.style.display = "none";
                break;
        }

        // 結果の表示
        header.innerHTML = hand + "<br>" + comHandName;        
    }

// パーボタン
pa.addEventListener('click',janken_pa);
    function janken_pa() {
        // ランダムで番号を決める
        let com = Math.floor(Math.random() * 3 + 1); 

        // コンピュータの手の名前
        let comHandName = "";
        let hand = "";
        switch (com) {
            case GU:
                hand = "グー！";
                comHandName = "きみの、勝ちニャ…";
                header.style.color = "white"
                header.style.backgroundColor = "red"
                header.style.letterSpacing = "0.5em";
                han.setAttribute('src','public/images/hand/gu2.png');
                re.style.display = "block";
                back.style.display = "block";               
                btn.style.display = "none";
                break;
            case CHOKI:
                hand = "チョキ！";
                comHandName = "出直しニャ！";
                header.style.color = "black"
                header.style.backgroundColor = "skyblue"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/choki2.png');
                re.style.display = "block";
                back.style.display = "block";               
                btn.style.display = "none";
                break;
            case PA:
                hand = "パー！"
                comHandName = "あいこで？";
                header.style.color = "black"
                header.style.backgroundColor = "yellow"
                header.style.letterSpacing = "1em";
                han.setAttribute('src','public/images/hand/pa2.png');
                break;
        }

        // 結果の表示
        header.innerHTML = hand + "<br>" +comHandName;        
    }

re.addEventListener('click',reset);
    function reset() {
        window.location.reload(false);
    }