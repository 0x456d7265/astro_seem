const TURKISH_MONTHS = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

export function formatDateTurkish(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = TURKISH_MONTHS[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
} 