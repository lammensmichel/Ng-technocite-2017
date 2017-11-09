export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(titre: string, link: string, votes?: number) {
        this.title = titre;
        this.link = link;
        this.votes = votes || 0;
    }
    votesup() {
        this.votes ++;
        return false;
    }
    votesDow() {
        this.votes --;
        return false;
    }
}
