export interface postForm {
    postType: string,
    rewardType: string,
    amount: number,
    title: string,
    body: string,
    isMember: boolean,
    selectedLang: Array<string>,
    selectedTool: string,
    startDate: Date,
    endDate: Date
}