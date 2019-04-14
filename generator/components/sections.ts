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

    footer():string {
        return `<footer></footer>`
    }

    end():string {
        return `</body></html>`
    }
}