export const truncateText = (str: string) => {
    if(str.length > 20) {
        return str.substring(0, 20) + '...';
    }
    return str;
};
