export const hasSameText = (firstText: string | null, secondText: string | null) =>
{
    if(firstText !== null && secondText !== null)
    {
        return firstText.toLowerCase() !== secondText.toLowerCase();
    }
    return true;
}