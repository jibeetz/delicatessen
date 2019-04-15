import * as fs from "fs";
import * as util from "util";
import {Sections} from "./components/sections"
const Data = require('./../manager/delicatesses')

const TemplateSections = new Sections();

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function generateTemplate () {

    let styleFromFile:string = await readFile('./themes/' + Data.meta.theme + '/style.css', 'utf8');
    styleFromFile = styleFromFile.replace(/\r?\n|\r/g, '');

    let template:string = ''

    template += TemplateSections.head(Data.meta.title, styleFromFile)
    template += TemplateSections.header(Data.meta.title)
    template += TemplateSections.main(Data)
    template += TemplateSections.footer()
    template += TemplateSections.end()

    console.log('template', template);

    const applyTemplate = async () => {
        await writeFile("./public/index.html", template);
        console.log('file write done')
    }
    applyTemplate()
}
generateTemplate();

