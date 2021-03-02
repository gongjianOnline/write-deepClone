const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai);

const assert = chai.assert;
const deepClone = require("../src/index")

describe('deepClone',()=>{
    it("测试函数",()=>{
        assert.isFunction(deepClone)
    });
    it("拷贝基本数据类型",()=>{
        const n = 123;
        const n2 = deepClone(n)
        assert(n === n2)
    });
    describe("拷贝对象",()=>{
        it("深拷贝对象",()=>{
            const a = {name:'frank',child:{name:'childFrank'}};
            const a2 = deepClone(a)
            assert(a !== a2)
            assert(a.name === a2.name)
            assert(a.child !== a2.child)
            assert(a.child.name === a2.child.name)
        });
        it("深拷贝数组",()=>{
            const a = [[11,12],[21,22],[31,32]];
            const a2 = deepClone(a);
            assert(a !== a2)
            assert(a[0] !== a2[0])
            assert(a[1] !== a2[1])
            assert(a[2] !== a2[2])
        });
        it("深拷贝函数",()=>{
            const a = function(x,y){
                return x + y
            }
            a.xxx = {yyy:{zzz:1}}
            const a2 = deepClone(a)
            assert(a !== a2);
            assert(a.xxx.yyy.zzz === a2.xxx.yyy.zzz)
            assert(a.xxx.yyy !== a2.xxx.yyy)
            assert(a.xxx !== a2.xxx)
            assert(a(1,2) === a2(1,2))
        });
        it("环特能复制",()=>{
            
        })
    })

})