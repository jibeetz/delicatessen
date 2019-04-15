export class Sections {

    head(title: string, style:string): string {
        return `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>` + title + `</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>` + style + `</style>
        </head><body>`
    }

    header(title: string):string{
        return `<header><h1>` + title + `</h1></header>`
    }

    main(data):string {
        let mainTemplate: string = '<ul>'

        data.delicatesses.places.forEach(place => {
            mainTemplate += `<li><h3>` + place.name +`</h3></li>`
        });

        mainTemplate += '</ul>'

        return mainTemplate
    }

    footer():string {
        return `<footer></footer>`
    }

    end():string {
        return `</body></html>`
    }
}