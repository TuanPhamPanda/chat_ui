export const parseTimer = (timer: number) => {
    if (timer < 60) {
        //00:00 -> 00:59
        return `00:${timer < 10 ? `0${timer}` : timer}`
    } else {
        let seconds: number

        let minutes: number

        if (timer < 3600) {
            seconds = timer % 60
            minutes = Math.floor(timer / 60)
            //01:00 -> 59:59
            return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
        } else {
            //01:00:00 -> ...
            const hours = Math.floor(timer / 3600)
            const timerHour = timer % 3600

            minutes = Math.floor(timerHour / 60)
            seconds = timerHour % 60

            return `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
                seconds < 10 ? `0${seconds}` : `${seconds}`
            }`
        }
    }
}
