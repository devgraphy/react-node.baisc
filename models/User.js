const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 공백 자동 무시
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 관리자, 일반 사용자 구분
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {  // 토큰 만료 기간
        type: Number
    },
})

const User = mongoose.model('User', userSchema) // 스키마를 모델로 감싸기
module.exports = { User }