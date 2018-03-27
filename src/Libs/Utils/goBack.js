
export default function goBack() {
    g.trcls = 'fadeOut'
    window.history.back()
    setTimeout(() => {
        g.trcls = 'fade'
    }, 100);
}