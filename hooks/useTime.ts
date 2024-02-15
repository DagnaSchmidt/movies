export default function useTime(minutes: number) {
    if (minutes < 60) {
        return `${minutes} min`;
    } else {
        let hours = Math.floor(minutes / 60);
        let restMinutes = Math.floor(minutes % 60);
        return `${hours}h ${restMinutes}min`;
    }
};
