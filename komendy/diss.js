module.exports = {
    name: 'diss',
    description: 'Riposta!',
    execute(message, args) {
        let generator = Math.random(1,10);

        let riposta1 = "damn";
        let riposta2 = "udajesz?";
        let riposta3 = "pojebany jestes chyba";
        let riposta4 = "LMAO -,-";
        let riposta5 = "XDDDDD";
        let riposta6 = "LOOOOOL";
        let riposta7 = "ZALOSNEE";
        let riposta8 = "WTFFF?";
        let riposta9 = "OHAJO";
        let riposta10 = "UwU";

        if(generator === 1) {
            message.channel.send(riposta1);
        } else if(generator === 2) {
            message.channel.send(riposta2);
        } else if(generator === 3) {
            message.channel.send(riposta3);
        } else if(generator === 4) {
            message.channel.send(riposta4);
        } else if(generator === 5) {
            message.channel.send(riposta5);
        } else if(generator === 6) {
            message.channel.send(riposta6);
        } else if(generator === 7) {
            message.channel.send(riposta7);
        } else if(generator === 8) {
            message.channel.send(riposta8);
        } else if(generator === 9) {
            message.channel.send(riposta9);
        } else if(generator === 10) {
            message.channel.send(riposta10);
        }
    }
}