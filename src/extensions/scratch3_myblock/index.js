const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3MyBlock {
    constructor (runtime) {
        this.runtime = runtime;
        this.text = "";
        this.changed = 0;
        this.lasthat = false;
    }

    getInfo () {
        return {
            id: 'myblock',
            name: 'Task1',
            blocks: [
                {
                    opcode: 'square',
                    blockType: BlockType.REPORTER,
                    text: 'square [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 0
                        }
                    }
                },
				
				{
                    opcode: 'squareroot',
                    blockType: BlockType.REPORTER,
                    text: 'squareroot [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 0
                        }
                    }
                }
            ],
        };
    }
	
	
	square(args) {
		//Converting String to Number and then using power function
        return `${Math.pow(Cast.toNumber(args.TEXT),2)}`;
    }
	
	squareroot(args) {
	if(Cast.toNumber(args.TEXT)<0)
	{
		//If it's a negative number it won't have real roots
		return Math.sqrt(-1*Cast.toNumber(args.TEXT))+'i';
	}
	else
	{
		//If it's a positive number we will use inbuilt sqrt function
        return Math.sqrt(Cast.toNumber(args.TEXT));
	}
    }

}

module.exports = Scratch3MyBlock;