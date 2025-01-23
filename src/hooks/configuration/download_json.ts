export default function (obj: any, fileName: any) {
    const blob = new Blob([JSON.stringify(obj)], {
        type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + ".json";
    link.click();
    URL.revokeObjectURL(url);
}
