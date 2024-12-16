exports.HomePage=class HomePage{

    constructor(page){
        this.page=page
          
    }

    async Navigate(linkname) {
        await this.page.getByRole('link', { name: linkname }).click();
    }

}