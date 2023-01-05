export const issuesAPI = {
  getIssues: () => JSON.parse(localStorage.getItem('issues')),
  setIssues: (issues) => localStorage.setItem('issues', JSON.stringify(issues)),
};
