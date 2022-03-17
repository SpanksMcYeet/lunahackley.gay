const r = (m, v) => v ? Math.floor(Math.random() * m) : Math.random() < m
const p = a => a[Math.floor(Math.random() * a.length)]
const u = (w, c) => r(c) ? w.toUpperCase() : w
const s = (l, c, i, a, o) => i.match(l) && r(c) ? i += a : i += o
const i = (a, i, n) => [...a.slice(0, i), n, ...a.slice(i)]
const cp = (i, p, t) => {
    document.getElementById(i).innerHTML = t
    let g = document.getElementById(i).innerHTML
    navigator.clipboard.writeText(g).then(() => {
        let o = document.getElementById(p)
        o.classList.toggle("show")
    })
}
document.getElementById("gifClickable").addEventListener("click", () => {
    let L = [
        'emlwLWJvbWIta2FueWUtd2VzdC1rYW55ZS13ZXN0LXN0YXJpbmctZ2lmLTIxNDc5ODA4', 'dGhlcmUtaXMtYS16aXAtYm9tYi1pbi15b3VyLW1haWxib3gtemlwLWJvbWItcGlwZS1ib21iLXRoZXJlLWlzLWEtcGlwZS1ib21iLWluLXlvdXItbWFpbGJveC1naWYtMjI2MjMwNjE', 'c2tpbndhbGtlci1naWYtMjM2MTYwODY', 'ZHJhZ29uY2FyLWdpZi0xOTQxMjM2NA', 'dG9ueS1zdGFyay1zaHJ1Zy10b255LXN0YXJrLXNocnVnLW5pY2UtYXJndW1lbnQtYnV0LWktaGF2ZS15b3VyLWhvbWUtYWRkcmVzcy1uaWNlLWFyZ3VtZW50LWJ1dC1naWYtMjMxMzYzNzk', 'aHVtb3ItbW9ybmluZy10ZWV0aC1yZW1lbWJlci1kZW50aXN0LWdpZi0xNDU3NDgzOQ', 'c3BvbmdlYm9ic2V4c3BlZWRydW4tZ2lmLTIxNTgyNTgw', 'd2VpbGFuZC1nYXZpbi1uZXJkLWlwLWktaGF2ZS1naWYtMjIxMjEwNTk', 'bmFoLWJydWgtYWgtb2staS11bmRlcnRhbmQtbm93LWdpZi0yMjk4MjU2MQ', 
        'ZG9udC1jYXJlLWRpZG50LWFzay1jb3BlLV9yYXRpby1za2lsbC1pc3N1ZS1jYW5jZWxlZC1naWYtMjQxNDgwNjQ', 'bWUtYW5kLXRoZS1ib3lzLXdoZW4tdGhlLXdhdGVyLWhvbGUtaXMtdW5kZXItYXR0YWNrLW9uLW91ci13YXktZ2lmLTE2NDQ1NTY2', 'ZXBpYy1lbWJlZC1mYWlsLWVtYmVkLWZhaWwtbmlrb2NhZG8tbmlrb2NhZG8tZmFpbC1naWYtMjEyMDYxMjA', 'Zm9ydG5pdGUtdGhlLXJvY2stZm9ydG5pdGUtdGhlLXJvY2stZm91bmRhdGlvbi1mb3J0bml0ZS1mb3VuZGF0aW9uLWdpZi0yNDAxOTY5OQ', 'cGF0cmljay1jcmFuay1kYXQtZ2lmLTE5MzI4MTA0', 'dHJvbGwtdHJvbGxpbmctbWVtZS1wYy1ib3lzLXdlLWRvLWEtbGl0dGxlLXRyb2xsaW5nLWdpZi0yMDcyNjEwMA', 'cGF0cmljay1iYXRlbWFuLWNocmlzdGlhbi1iYWxlLWFtZXJpY2FuLXBzeWNoby1mdW5ueS11bmZ1bm55LWdpZi0yMzY2Mjk5MQ', 'Ym9uZXItZ2lmLTI0MTgxNzQz', 'Zm5hZi1mbmFmLXNlY3VyaXR5LWJyZWFjaC1wdXJwbGUtZ3V5LW1hbi1iZWhpbmQtdGhlLXNsYXVnaHRlci1maXZlLW5pZ2h0cy1hdC1mcmVkZHlzLWdpZi0yNDE5NjU1MA', 'd2hpdGUtd29tYW4tanVtcHNjYXJlLWZuYWYtc2VjdXJpdHktYnJlYWNoLXNlY3VyaXR5LWJyZWFjaC12YW5lc3NhLXdoaXRlLXdvbWFuLWdpZi0yNDIwNTg4MA', 'ZGV2aW91cy1saWNrLWRpYWJvbGljYWwtbGljay1tb25rZS1saWNrLXRpa3Rvay1naWYtMjMxMjM1MDU', 
        'dHJvbGxpbmctdHJvbGxlZC10cm9sbC10cm9sbGZhY2Utd2UtZG8tYS1saXR0bGUtdHJvbGxpbmctZ2lmLTIwOTA1NjAy', 'YW1vbmctdXMtZXBpYy1lbWJlZC1mYWlsLWFtb2d1cy1zdXMtZ2lmLTIwNTUzNjYz', 'Y29tbWllLW1vbS1zd2FnLWJyZWFrZGFuY2UtYnJlYWtkYW5jZS1zd2FnLWdpZi0yMTU0ODY4Mw', 'bWVtZS1hbmdyeS1iaXJkcy1qdW1wc2NhcmUtZ2lmLTI0MTgxNjQy', 'YW1vbmd1cy1hbW9ndXMtaGFwcHktbWVhbC1naWYtMjA1OTc5NTI', 'ZXhwbG9zaW9uLWclQzMlQTFzLWxlYWstZXhwbG9kZS1naWYtMTUzOTc2ODQ', 'dGhlLWJyZWFkLWNhdC10aGUtbW9uZXktY2F0cy1tZW1lLWdpZi0yMjEwMzA3OA', 'YWxzLWFsYmFuaWEtbGlmZS1zaW11bGF0b3ItYWxiYW5pYS1hbGJhbmlhLWxpZmUtbGlmZS1zaW11bGF0b3ItZ2lmLTIxOTE1NDQx', 'aXRhbGlhbmNhdC1pdGFseS1zdGFyZS1naWYtMTIyMTM5ODU', 'ZmF0LWhlcm9icmluZS1naWYtMTgzNjMzNTY', 'bWluZWNyYWZ0LXJlZGRpdC1mdW5ueS1naWYtMTQxMzg2NTg', 'ZmFtaWx5LWd1eS1pcGhvbmUtdHJhbnNmb3JtLW1vcnBoLWlwaG9uZTUtZ2lmLTE2NTU3NzU5', 'bWVtZXRyYXAtZ2lmLTIyMzc1MTI1', 'Z2V0LXJlYWwtY2F0LXNrYXRlLWZ1bm55LW1lbWUtZ2lmLTE4NjY2ODc4', 'cmF5LWVnaXJsLWVnaXJscy1naWYtMjE2MTg1OTU', 'aXAtaXAtYWRkcmVzcy1hZGRyZXNzLW1jLW1jZG9uYWxkcy1naWYtMjI4NTA0NDc', 'YnJ1aC1tb2FpLW1veWFpLXplbWJ5Ny1iaWdfZnVua3ktZ2lmLTIzNzk2OTEz', 'Y2hhbmdlLWRhLXdvcmxkLW15LWZpbmFsLW1lc3NhZ2UtZ29vZGJ5ZS1jaWdhcmV0dGUtZ2lmLTE1MTA1Mjcy', 'a2lsbGVyLWZpc2gtc2FuLWRpZWdvLXNodXQtdGhlLWZ1Y2stdXAtZ2lmLTIyODAwMDMx', 'dWdseS1zbWgtd2hhdC10aGUtaGVsbC1naWYtMTQ1Njc3NjA', 'bW90aGVyLWZhdC15by1tYW1hLWV4cGxvZGUtZXhwbG9zaW9uLWdpZi0yMjUxNTQwNw', 'bWUtbWFkLWZsb3dlci1nYXktbm8tZ2lmLTE1MTYzNjcw', 'Y3J5LWFib3V0LWl0LWNvbmNyZXRlLW1peGVyLWNlbWVudC1taXhlci1taXhlci1zcGluLWdpZi0yMTYyMzAzNw', 
        'YmlnLWNodW5ndXMtdGYyLW9zdS1vaGlvLXN0YXRlLXVuaXZlcnNpdHktZmxhc2hiYW5neS1naWYtMTY0MzgxMTI', 'Y2Fycm90LXRpbWUtaGFyYW0taGFyYW0taGFyYW0tYnVsbC1naWYtMTU0MDM2Njg', 'b2ZmLXN0YWdlLWh1bXAtZ2lmLTE4NDc5MzIx', 'YnJ1c2gtYnJ1c2gtaGFpci1pbmRpYW4tbmlnZ2EtbmlnZ2EtZmF4LWdpZi0xNzA3NjU1MQ', 'YmhlZnN1aGVzZnVoLWdpZi0yMDg5MjYxMw', 'ZGlzY29yZC1tZW1lLXNwb29rZWQtc2NhcmVkLW1vZC1naWYtMTgzNjEyNTQ', 'anVuZ2tvb2stZ2V0LXJlYWwtY2F0LXBob3Rvc2hvcC1wZW5pcy1naWYtMjA5NzkzMjk', 'ZGFmdC1wdW5rLXRyYXAtZmFucy10cmFwLWFsaXZlMjAwNy1hbGl2ZTE5OTctZ2lmLTIzMzcxMDE4', 'ZW5nbGFuZC1sb2wtcmVhbGx5LXRocmVlLWxpb25zLTNsaW9ucy1naWYtNTI2NzMzNg', 'a2lyeXUtZmF4LWZheC10YmgteWFrdXphLWNvbXBmLWdpZi0yMTQ1Mjk5MQ', 'c2xpY2stZmFsbC1vdWNoLWZhaWwtb29wcy1naWYtNDQwMjM1MQ', 'bm8tbnV0LW5vdmVtYmVyLWJvbHRzLWdpZi0yMzY0NTgyMw', 'c29jaWFsLWNyZWRpdC1zb2NpYWwtY3JlZGl0LXNjb3JlLW1lbWUtam9obi14aW5hLWdpZi0yMzY0OTU1Nw', 'dW5iYW5uZWQtZ2lmLTE4MDQ0ODk0', 'aW5mZXJub3gtaW5mZXJub3gtZ2FtZXMtY2FnZS1nYW1lcy1jYWdlLWluY2luZXJvYXItdGhvbWFzLXRoZS1pbmZlcm5veC1lbmdpbmUtZ2lmLTIwNDkyNTM0', 'Y29wZS1iaWctZmxvcHBhLWdyZWdvcnktY29wZWl1bS1jb3BpdW0tZ2lmLTIwNjAzOTQ0', 'a2lkcy1mYWxsaW5nLW92ZXItYmVhY2gtYmFsbC1naWYtMTQ4ODE2MzQ', 'dW5kZXJzdGFuZGFibGUtaGF2ZS1uaWNlLWRheS1oYXZlLWEtZ3JlYXQtZGF5LWhhdmUtYS1nb29kLWRheS1uaWNlLWdpZi0yMDg1MDExMA', 'YWxiYW5pYW4tZ2lmLTE4MDk5NDAx', 'cnVsZS1ydWxlMS1icmljay13YWxsLXRhbGtpbmctdG8tYS13YWxsLWFyZ3VtZW50LWdpZi0yMjI5MTk4OA', 'emVyby10d28tc3JiaWphLXNlcmJpYS16ZXJvLXR3by1zZXJiaWEtZ2lmLTIxOTU5NjE1', 'ZmxvcHBhLWNhcmFjYWwtYWxiYW5pYW4taGVsaWNvcHRlci1naWYtMTg4OTQxODA', 
        'bWVjY2Eta2FhYmEtb21yYS1oYWpqLWVpZC1tdWJhcmFrLWdpZi0yMTgxODA0Ng', 'b2theS1yb3V0dC1va2F5cm91dHQtc3Blcm0tbWlsay1naWYtMjIzMDQ4NDI', 'd29qYWstYXJndWVtZW50LXR3aXR0ZXItZ2lmLTE5NzMwMDQ5', 'ZGFldnktZ2lmLTE5ODk4MTY0', 'c29jaWFsLWNyZWRpdC1zb2NpYWwtY3JlZGl0LXNjb3JlLWNyZWRpdC1zY29yZS1zY29yZS1jaGluYS1naWYtMjMxMjU3MDE', 'Zmxvd2V5LXlvdXJtb20tZ2lmLTIwNjgwNjk5', 'am9lLW1hbWEtYmlnLWNodW5ndXMtZnVubnktZ2lmLTIwNjgwMTU0', 'cmF0aW8tbW95YWktbW9haS1naWYtMjMwNjc2Nzk', 'ZGlzY29yZC1kaXNjb3JkLW5pdHJvLW5pdHJvLWxhdWdoLW1vbmV5LWdpZi0yMzA5OTI5Ng', 'dG91aG91LWZsYW5kcmUtc2NhcmxldC1idWxsZXQtaGVsbC1yZWltdS1oYWt1cmVpLWdpZi0yMjMxNjI2OA', 'cmF0cy13aGVuLXRoZXktc2VlLWEta2ZjLWRlZXAtZnJ5ZXItcmF0cy1taWxrc2hha2UtbWlsa3NoYWtlbXAzLXdoZW4tZ2lmLTIxNTIwNDMy', 'YmFsbHMtbnV0cy1ob3Qtc2V4LW9wZW4tc2Vhc29uLW15LWJhbGxzLWl0Y2gtZ2lmLTIyMTY0NDYw', 'bWUtbG9va2luZy1mb3ItZnVubnktbG9va2luZy1mb3ItdGhlLWZ1bm55LXdoZXJlcy10aGUtZnVubnktd2hlcmUtZnVubnktZnVubnktZ2lmLTE5NTQyODM5', 'ZGlzY29yZC1kaXNjb3JkLW5pdHJvLW5pdHJvLWxhdWdoLW1vbmV5LWdpZi0yMzA5OTI5Ng', 'Y3J5LWFib3V0LWl0LWFtb2d1cy1hbW9uZy11cy1zdXMtaW1wb3N0b3ItZ2lmLTIwNjEzMDM1', 'Z3RhLXlvdXItbW9tLWdpZi0yMzA3NDM0Mg', 'bXktbG92ZS1pLWxvdmUteW91LWxvdmUtaGVhcnRzLXNleHktam9lLWdpZi0xNDU1NDYxMw', 'bnNmdy1naWYtMjE1NDQ3Njk', 'bWVtZXMtbWVtZS1yYW5kb20tY2FwdGlvbnMtY2FwdGlvbi1naWYtMjM1NTc5NTU', 'YjBvcmctZ2lmLTIyNDU2MTgx', 'ZHJlYW0tdHdlcmstZHJlYW0tc21wLWRyZWFtLXRlYW0tZHJlYW0tZHJlYW0tbWluZWNyYWZ0LWdpZi0yMDkyMjczNg', 'amVzdXMtam9nYW5kby1ib2xhLWdpZi0yMDgyNzU4OA', 'cGV0Y28tZnVubnktcGFycm90LWZvcnJlc3QtZ3VtcC1ydW4tZ2lmLTE2OTIyNzEx', 'a2V2aW4tdXNoeS1ndXNoeS1naWYtMTg5MzQwOTA', 'cGVuZ3Vpbi1maWdodC1pY2UtbWlzc2lsZS1mdW5ueS1naWYtMTQxMjUwMzg', 'YW1vbmctdXMtdHdlcmstdnJjaGF0LWFtb25nLXVzLXN1cy1zdXNoaS1naWYtMjMxOTYyMDc', 
        'dG9rZW4tZ3JhYmJlci10aGFub3MtZGlzY29yZC1saW5rLWdpZi0yMjkwODAyNA', 'bmFzLW1veWFpLW15LWJlbG92ZWQtbXktYmVsb3ZlZC1naWYtMjI1MDczMjI', 'dHJvbGwtY3luLW1veWFpLW1vYWktd2Fsa2luZy1naWYtMjMzMDczNjc', 'YnJ1aC1icnVoLW1vbWVudC1icnVoLW1vYWUtYnJ1aC1tb2FpLW1vYWktZ2lmLTIwMzExNTkw', 'dGhhbm9zLWNyYWZ0LXRoYW5vcy1jcmFmdC1lcGljLXdpbm5lci1naWYtMTQ2MTM0MDM', 'dGhhbm9zLWhhbmQtbW92aW5nLWdpZi0xNjA4ODQ4Nw', 'aGF5YXRvci1yYWNvb24tdGhhbm9zLW1hcnZlbC1naWYtMTU5Mzc4ODU', 'bmFzLW1veWFpLW15LWJlbG92ZWQtbXktYmVsb3ZlZC1naWYtMjI1MDczMjI', 'ZHJlYW0tdGVhbS1kcmVhbS1kcmVhbS1taW5lY3JhZnQtZ2Vvcmdlbm90Zm91bmQtc2FwbmFwLWdpZi0yMTczNjg4Mw', 'c2hyZWstd2hlbi1pLWN1bS13aGVuLWN1bS1zaHJlazItY3VtLWdpZi0xNzYwMjM3MQ', 'YW1vbmctdXMtY3J5LWFib3V0LWl0LWdvLWNyeS1hYm91dC1pdC1zdXNzeS1zdXNzeS1pbXBvc3Rlci1naWYtMjMxNDA3NDk', 'bGV0cy1nby1kYWJhYnktbWVhdGNhbnlvbi1tZW1lLWktcHVsbC11cC1naWYtMjEyNzI0ODA', 'YW1vbmctdXMtYmxhY2tsaXN0LWdpZi0xODUwNjYzNw', 'c2hyZWtzLWdvbm5hLWdpdmUtaXQtdG8teWEtc2hyZWstc2hyZXgtc2hyZWstZ2l2ZS1zaHJlay1iYXJyZWwtZ2lmLTEyMDI1ODU0', 'cmVwb3N0LWlmLW5vLW1vcmUtZm9ydG5pdGUtZm9ydG5pdGUtYmFubmVkLWdpZi0yMDY0Njc5Nw', 'emV6ZS1rb2Rhay1ibGFjay10cmF2aXMtc2NvdHQtb2Zmc2V0LWdpZi0xMjk3MzgyNQ', 'ZGFtbi15b3UtZ290LXRoZS13aG9sZS1zcXVhZC1sYXVnaGluZy1naWYtMjA4NDk3NDQ', 'ZGlzY29yZC1jYXJzb24tZ2lmLWFtb25nLXVzLWltcG9zdG9yLWdpZi0yMTQyMjIzNg', 'Y3JhYi1jcmFiLWZhY3RvcnktbWFjaGluZS1zZWEtZm9vZC1naWYtMTczMzM5NDk', 'dGYyLWdpZi0xODU3MTM5OQ', 'bWUtd2hlbi1qaWhhZC1zd2FnLWJpZy1jaHVuZ3VzLWdpZi0xOTY1MzY2Ng', 'ZG9udC1jYXJlLWktZG9udC1jYXJlLXNub3R0eS1ib3ktZ2xvd3VwLXNub3R0eS1ib3ktaS1kb250LWdpdmUtYS1mdWNrLWdpZi0yMzQyNTA2MA', 'aHlwbm90aXNlZC1uaXRyby1tZW1lLWRpc2NvcmQtZ2lmLTIwOTU1ODQ4', 
        'dHJvbGwtdHJvbGwtZmFjZS1zbXVnLXNtaXJrLWdpZi0yMTgyMTg4Nw', 'c2NvdXQtdGYyLXRmMi1raWRuZXktZmFpbHVyZS13YXRlcm1lbG9uLXlvdS1oYXZlLW1lcmUtc2Vjb25kcy10by1saXZlLWdpZi0yMDQ1NzczOQ', 'eW91cmUteW91ci1naWYtMjIzMjg2MTE', 'ZHJpbGwtYXdlc29tZS1nZXQtZmFrZS1jaHVuZ3VzLWdpZi0xOTYyODYzOQ', 'Y2hpcHMtYWhveS1zdXMtc3VzLXdoby1pcy1pbXBvc3Rlci1hbmdyLWJpcmQteGQtZ2lmLTIyNDU4OTAy', 'ZmFyZC1mYXJ0LXVybW9tLWJpZ2ZhcmQtYmlnLWdpZi0yMTc5MzIzNg', 'ZmFyZC1mYXJ0LXVybW9tLWJpZ2ZhcmQtYmlnLWdpZi0yMTc5MzIzNg', 'bWV0YWwtZ2Vhci1zbmFrZS1zb2xpZC1zbmFrZS1mYXJkLWV3LWdpZi0yMjYwOTk3OQ', 'amFydmlzLXRvbnktc3RhcmstaXJvbi1tYW4tc21pcmstaXJvbi1tYW4tZ2lmLTIxNTMxNzE0', 'c3Vzc3ktYW1vZ3VzLWFtb25nLXVzLWdpZi0yMTk4Njk1Nw', 'dGhlLWRvbGxhci02dGhlLWRvbGxhci1jaG93ZGV5YXBwbDMtZ2lmLTIwNzEyMjIx', 'Z2V0LXJlYWwtZnJvZy1mcm9ncy1mcm9nLWRhbmNlLWRhbmNpbmctZnJvZy1naWYtMTk5OTI4NTM', 'd2lsYnVyLW1jeXQtZ2hvc3RidXItc21wLWRyZWFtLXNtcC1naWYtMTk5NDMyODc', 'ZG94LWRyZWFtLXN0YW5zLXNwZWVkcnVubmluZy1zcGVlZHJ1bi1kcmVhbS1zbXAtZ2lmLTIxMzU1NTI3', 'dGhlLWJyb24tamFtZS1naWYtMTk1NjAzNDQ', 'YnJ1aC1tb2FpLWludGVuc2UtdHJhbnNpdGlvbnMtcmVkZGl0LWNodW5ndXMtZ2lmLTIwMzI2ODQ4', 'aC1hcHBsZS1hcHBsZS1oLWFwcGxlLWdpZi0xODgzNDY4OQ', 'c2FtaXNob3RncmFuZG1hLWdpZi0xODMxMDg3Mg', 'bm8tbml0cm8tZGlzY29yZC1uaXRyby1kaXNjb3JkLW1vZC1lcGljLWVtYmVkLWZhaWwtbWVtZS1naWYtMjMwMDA2ODk', 'bmV0ZmxpeC1iYWxscy1naWYtMjE0Nzc3MTQ', 'YW5pbWF0ZWQtdGV4dC1hbmltYXRlZC1jb3BpbmctY29waW5nLW1lY2hhbmlzbS1pLWdldC10by1jaG9vc2UtZ2lmLTE3MzYzMDk4', 'Z29rdS1naWYtMjM4ODUzMDY', 
        'cmljaGFyZC13YXR0ZXJzb24tbWlub3Itc3BlbGxpbmctbWlzdGFrZS1pLXdpbi1naWYtMjMwMzE5OTI=', 'Ym9hci1ib2Fycy1waWctcGlncy1naWYtMjM2MzkwMDY', 'bmVjby1hcmMtZ2lmLTIzNDcwMDUz', 'Ym9hci1ib2Fycy1iZWFyLWdpZi0yMzYzOTEyMw', 'Ym9hci1ib2Fycy1yZXZlbGF0aW9uLWdpZi0yMzYzOTAwNQ', 'Ym9hci1ib2Fycy1yYWdlLWdpZi0yMzY0MjYxMA', 'Ym9hci1ib2Fycy1naWYtMjM2MzkxMjE', 'bGF1Z2hpbmctZW1vamktbGF1Z2hpbmctZ2lmLTIwODYyNDU3', 'ZHJpcHBpbmctY29jay1jaGlja2VuLWRyaXAtY2hpY2tlbi1hbW9uZy1kcmlwLWdpZi0yMTIyODQxNA', 'cHVuY2gtZmFjZS1ydWJiZXItZ2lmLTEzNzU5MTEy', 'b2stYW5kLWdpZi0yMTA4MzU5MQ', 'bmlrb2NhZG8tYXZvY2Fkby1mb3J0dW5lLWNvb2tpZS1naWYtMjM3MzI5MTU', 'cmlwLWJvem8tcmlwdXMtYm96dXMtbmlrMDMyMS11bmxpdmUyNzc0LXBvdGF0by1jaGlwLXNtb2tlci1ib3pvLWdpZi0yMTA3OTcxMg', 'YW1vbmctdXMtZ21vZC1nbW9kLXJhZ2RvbGwtcmFnZG9sbC1zdXMtZ2lmLTIxMDA1NzAx', 'YWxiYW5pYS1saWZlLXNpbXVsYXRvci1icnVnZ3MtYnJ1aC1nYW1pbmctaGVhcnQtbG9ja2VyLW15LWJlbG92ZWQtZ2lmLTIxODM1MTIw', 'bWV0YWNhbGxlZC1oZWxwLXBsZWFzZS1lZ2lybC1yb2Jsb3gtZ2lmLTE3ODc3Mzcz', 'Y29wZS1jYXQtZGFuY2luZy1jYXQtY2F0LWRhbmNpbmctY29wZS1zZWV0aGUtZ2lmLTIzMjU0Njgw', 'cmlwLWJvem8tZ2lmLTIxODEwNDU4', 'Y2FuLWktaGF2ZS1kai1yb2xlLW1lbWUtdGVhYm93LWNhbi1pLWdldC1kai1yb2xlLWRqLWdpZi0yMTI3NDY5MQ', 'eW91c2hvdWxkbG92ZXlvdXJzZWxmLW5vdy15b3VzaG91bGRraWxseW91cnNlbGYtbm93LXlvdXNob3VsZGxvdmV5b3Vyc2VsZi1sb3ZleW91cnNlbGYta3lzLWdpZi0yNDAxMDc3Mw', 'ZmFpbC1kcml2ZXItcGFya2luZy1hY2NpZGVudC1jYXItY3Jhc2gtZ2lmLTc0NTY1MDg', 'aHlkcm9nZW4tZ2lmLTIzMTYzNzk0', 'd2FzcC1kYXNoaWVsbC1zb3BoaWUtbWFpYS1sdWtlLWdpZi0yMTEyNjk1Ng', 'd29qYWstZ2lmLTIxOTkxODU1', 'dG9pbGV0LWZseS1hd2F5LXRvaWxldC1ib3dsLWZ1bm55LWdpZi0xNjY2NDY2OA', 'ZnJlZGR5LWZpdmUtbmlnaHQtZm5hZi1naWYtMjA0MjI0MzU', 'c3Bpbi1zcGlubmluZy1naWYtMTgxMTE0MDQ', 'YmFsbC1pbnNwZWN0aW9uLWJhbGxzLWluc3BlY3Rpb24tZm9vdGJhbGwtYm9idXgtZ2lmLTE5MjM0ODgz', 'Ym9hci1ib2Fycy1naWYtMjM2MzkxMjE', 'YXJpZXMtZGlzY29yZC1naWYtMjA2MDE2MDM', 'dGhlLWMtY2FyLWNhcnMtZ2lmLTIzOTQxMjk1', 'cmVudC1yaWNrLXJvbGwtZ2lybGZyaWVuZC1naWYtMjExNzkzMTA', 'cmljaGFyZC13YXR0ZXJzb24tbWlub3Itc3BlbGxpbmctbWlzdGFrZS1pLXdpbi1naWYtMjMwMzE5OTI', 'eXVtZWtvLXJlc2VydmUtcmlja3JvbGwtcGxlYXNlLXRha2UtYS1sb29rLWRpdm9yY2UtbGV0dGVyLWdpZi0xNzY1OTU2Mg', 'ZmluZC1ncm91ZG9uLWdyb3Vkb24tcG9rZW1vbi1naWYtMjE3OTY1MjY', 'Y3J5LWFib3V0LWl0LWFpcG8tZ2lmLTIxMDgwOTY1', 'bWVnYS1zdXNpLWdpZi0yMzQzMzcwMA', 'ZmVkZXgtbGlnaHRza2lucy1ob3ctbGlnaHRza2lucy1kZWxpdmVyLW1haWwtbGlnaHRza2luLW1vbWVudC1naWYtMTk4NDg0OTk'
    ]
    let b = [
        'NTA1OTc3NjI0NDM5NTU0MDU4LzkxMjE5ODAzMjg5OTA3MjAwMC9JTUdfMjI5NC5naWY', 'NTA4MzU5MTU5NjI5MjE3NzkyLzkyNDU3NjMzMjAyNzkyODU5Ni91bmNhcHRpb24uZ2lm', 'ODc0NDQ3NDExMTQ0MTcxNjEwLzkyOTU5Njg1MjUzNjQ3NTc0MC9CN0JGQjdDMS01QTFFLTQ1QkYtOUUwQy0zRjRCOTYwNjgzOTMuZ2lm', 'MzY3MTMyNDY4MTgyMjUzNTc4Lzg0Nzg3MjQyODc5Mjg3Mjk4MC9pbWFnZTAuZ2lm', 'ODM1MzkzMjM1NDI1ODIwNzQyLzkwMTE0NTk3Nzc0OTE0MzYyMy9pbWFnZTAuZ2lm', 'ODY2NDQ0ODYwNDYxODA5Njk5Lzg2NjYxNzExMTQ1NDgxMDE0Mi9pbWFnZTAuZ2lm', 'NzQzMTI3NzE5MDgwMDk5ODQxLzg5Njg4NjkxNzM0MDIxNzM3NS9pbWFnZTAtMTAtMS5naWY', 'OTA3MzE3MTQwNTg2MTEwOTg2LzkyODUwMDM1MjkyNjUwMjk1Mi9hbGJ1bV8yMDIyLTAxLTA1XzIyLTA4LTA0LmdpZg', 'OTA3MzE3MTQwNTg2MTEwOTg2LzkyODUwMTE4MjM4MzY3MzM0NS9hbGJ1bV8yMDIyLTAxLTA1XzIyLTExLTMxLmdpZg', 'NTQ2NzYzMjM1MDUxNzAwMzE0LzkyNzQ0NzAyNDYzMzI2NjE4Ni9pbWFnZTAtMTQ1LmdpZg', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkyNzQwMjYwNTQxNDU5MjU0Mi90ZW5vci5naWY', 'Njc1MjQ1MDM5MDU1Nzk4MjcyLzc1NjQ3MjI2MDk4MTgxNzM5NC9pbWFnZTAuZ2lm', 
        'OTA3MzE3MTQwNTg2MTEwOTg2LzkyNjcxMzYzODk5ODM5Mjg0Mi9SRFRfMjAyMTExMDlfMTIyMzQyMTI0MjY2MDczODY0NzAzNTM1NS5naWY', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkyNjE2NzA3MjI2NDg0MzMwNS9jYXB0aW9uLmdpZg', 'NzgxNDgxNzc4Nzk1MTE4NjEyLzkxOTg1NTA2NzY5ODQ0NjM3Ny9pbWFnZTAtMy5naWY', 'ODg5MjcxODQwNDQxMjUzODkxLzkyMDU3MjQ4MTM5ODUwNTQ4My9sNTNlYTlpbWdxMzgxLmdpZg', 'NzY0NDQ3MzMyMjg4NTYxMTUyLzkyNDA4NjY1OTMwMDA3NzYyOS9pbWFnZTAtMzc1LmdpZg', 'ODc0NDQ3NDExMTQ0MTcxNjEwLzkyMjM2MTE0MzE4NjU4MzU3Mi9JTUdfNDU4Ny5naWY', 'MjUzODg3ODMxNDczMTI3NDI1LzgzMTI1MTA5OTA5NTY2MjU5Mi9hcHByb2FjaC5naWY', 'NzY0NDQ3MzMyMjg4NTYxMTUyLzkyMDE5MDkwODc4MjIxOTI2NC8yMDIxMTIxNF8wNjQ5NDEuZ2lm', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkxODI5ODIzMDgwNTEwNjc1OC9pbWFnZTAtNC0xLmdpZg', 'NzgxNDgxNzc4Nzk1MTE4NjEyLzkxNjMyNzQ4MDg3OTYzNjUzMC9pbWFnZTAtMy0zLmdpZg', 'NTIzNDQzNzM1ODM3ODAyNTM2LzkxNTg5NTY1NzM1OTg3MjA0MC8yQkM5MzQ5QS0wREEyLTQ2QTQtQUE0OC05NzZCNTE3QzdEREIuZ2lm', 'Mzk2Mzc4MjM2NzA1MDQ2NTI5Lzc0NTI5MDk0NzEyNTgzNzg5NS9iaWdfY2h1bmd1c19waWNrbGVfcmlja190cm9sbGZhY2UuZ2lm', 'NzY0NDQ3MzMyMjg4NTYxMTUyLzkxOTA0NzkwOTAwNDE2OTIyNy9pbWFnZTAtMjQtMi5naWY', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkxODcwMTMxMzE3MTI3NTg5Ni9pbWFnZTAtMi5naWY', 'Mzg5MTU4NDI4MTM4MDEyNjgzLzgzMjMyNjU4MjQ1Nzk5MTIyOC85NTNmMTU3ZTFkZGVlNjVlZmZlYWRlNjk3Nzk1ZDhhYi5naWY', 'Nzk0NzMwMDQ2MjA3NTU3NzIyLzgxOTg0NDI5MTA1NjM2OTY3NC9oLmdpZg', 'NDkyODA2MTA5NDY4Mjk1MTY4Lzg4NjgyOTg4NTQwNDg4MDkwNi9pbWFnZTAuZ2lm', 'NDQyNzQ3ODM3NDAzNjI3NTMyLzgyMTM5NDg1NDg3Mjg3NTA3OC83NDUyMTYxOTM4NTc3MTYyNTUtMS0xLmdpZg', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkxNjE0NjMxMDU1NjU2NTUzNC9pX2hhY2tfdV9ub3cuZ2lm', 'NzMxNzQ1NDI5Nzk2MDI4NDc4Lzg3MzI1MDg0MjA1OTM0MTg4NC9pbWFnZTAuZ2lm', 'NjAyMDY3MjU2MDc5Mjg2MjgzLzkxMzEwNzkzNDg3ODI0OTAwMC9pbWFnZTAtMTU2LmdpZg', 'NzM5NDc5MzA3MTk3NDgxMTIxLzkwNTk3NDQ2MDc0NDYxMzkxOC9jYXB0aW9uLmdpZg', 
        'OTAzMjkwODk0NTcxMTc1OTk3LzkwNTE4ODQ3OTk1OTQzNzM0Mi9nbG9iZS5naWY', 'NzQ2NjkyNTQ1NzgxODI1NjQ2Lzc1MzUyNjAzODU4NzUwNjc1Ny9pbWFnZTAtMi5naWY', 'OTA1NTk4OTcxMDg1NDg0MDcyLzkwNTk5Mzg4MDUxNDczMjA5Mi9jYXB0aW9uLTYuZ2lm', 'NDA2MTg5NDY4MTM2MjQzMjAwLzg4ODAwMjEzMTMyMjM3MjEzNi8zMWI5NDE5NDQzMmY1ZDA1YWI4M2Q3NDY3MTg5MjM1NWEwZjcxNDE5YmYwNmI4MmQ1YzRmNWNhMDZhN2U1NWU0LmdpZg', 'ODU1NDQ5NjUxMDE3MDIzNTEzLzg5NzQ0MDcyNTU3NzM5MjE0OS9pbWFnZTAuZ2lm', 'NDAyODY4NjM0MjUyMzQ1MzQ2Lzg4MjIyMzIzMjgwMTk4NDUzMi9pbWFnZTAtNy5naWY', 'ODk5MjYyNjM0NzYxNzgxMjg5Lzg5OTg2MzMzMzk0NjE0Mjc1MC9yZW5kZXJfMjAyMS0xMC0xOV8wNS4zNS4zNy5naWY', 'ODk3MTU2NjE2MDgyODQ5NzkyLzg5Nzg1Mjg4NDY4NTgxNTgyOC9pbWFnZTAtMTkuZ2lm', 'NzUzNDY1NzYyOTI4MTMyMTM3Lzc2OTg2ODE5MDYzMjc3MTU4NC9zcGVlZC5naWY', 'ODk4Mjk3MTg2Mjk3NzMzMTIxLzkwMDU3MTQ5OTEwMTA1MjkyOC9zYW5kd2ljaC1zcGlubmluZy5naWY', 'ODc4NDcxNDg0MzA4MzU3MTMwLzg5MDIyMjY5MTgyOTgzNzg4NC9pbWFnZTAuZ2lm', 'MzU2MTUxMDgwNTQ1MDI2MDQ5Lzc2Nzk3NTcxMzg2NTA3MjY0MC9pbWFnZTAuZ2lm', 'ODE3NTg2NzY4ODI3MTIxNjY2Lzg5MTc2NDY2OTAxNzEwMDI5OC9pbWFnZTAuZ2lm', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzg5NjY0MDkyMTExNzAwNzkzMi90ZWEuZ2lm', 'ODY5NDA4MzIyODI5MjkxNTQwLzg5NTM3OTY0Mzk0MTY1MDQ4Mi9jYXB0aW9uLmdpZg', 'ODY5NDA4MzIyODI5MjkxNTQwLzg5NTM3OTY0Mzk0MTY1MDQ4Mi9jYXB0aW9uLmdpZg', 'MzQ2MTE5NDQ1NTY5MjA4MzI0Lzg2MjY5OTI2MjAyNjg0MjEyMi9qYXJ2aXMuZ2lm', 'NzY0NDQ3MzMyMjg4NTYxMTUyLzc2NTUwMzMxMjY2MTE4NDUyMi9pbWFnZTAuZ2lm', 'NzY0NDQ3MzMyMjg4NTYxMTUyLzc2NDYyNDE3MjM2MTE4NzM0OC9pZG9udGdpdmVhZnVjay5naWY', 'MzQ2MTE5NDQ1NTY5MjA4MzI0Lzc3MTIzMjE3MzQ0OTY3NDc2Mi9BdmF0YXItNDEuZ2lm', 
        'NjQ3MDgxNzQxMTQzNjM4MDM2Lzg2ODYzODcxMTQ0Nzk2MTYxMC9Ib3BlbGVzc0hhcnJ5LmdpZg', 'NjEwMTQyMTUxODI4ODMyMjU3LzY3NTE5MTg2NDgzOTYzNDk2NS80NGUyOGE3MmFhZDdjMDY4MTUxNDEyMTZhYmYwNTAxYzNjMDg2NjdmZWFjMjMwYTU0OWJmNjc5NTJkMDIxYzQ4XzEuZ2lm', 'NDM5NTE5NjY4ODE5MDY2ODgwLzg4Mjc3MzA5MDYwNDU1MjE5Mi9pbWFnZTAtMTAwLmdpZg', 'OTA3MzE3MTQwNTg2MTEwOTg2LzkzMzQ4MDkwMDAxNTA0MjYwMC9DT0NLLmdpZg', 'NTA1OTc3NjI0NDM5NTU0MDU4LzkyMDExNDY1NTEwMjM4NjI0Ni9jYXQtY2F0LWNoZXdpbmctYm90dGxlLmdpZg', 'ODc0NDQ3NDExMTQ0MTcxNjEwLzkzMjQ0NTUzMzc3ODM1NDIwNi8xNjQwNTM1MzQ0NDczLmdpZg', 'Nzg4ODY0MjY5OTk4NDg5NjMwLzkwNjIyMDgwOTQwNjc5MTc1MC9jYXB0aW9uLTYuZ2lm', 'NTc2ODA1OTAyODY3NDk2OTgyLzg0NDc1MTM2MzQwOTk2OTE5Mi9lemdpZi0yLWQ0ZjkyNWNlMjhhYS5naWY', 'ODkyMjkyMzI0OTYzNTM2OTUwLzkwMTQ1OTg0MTc1MzcwMjQzMC9SRFRfMjAyMTEwMTVfMDY1MjIzNTkwMTQzNTk1NTYwNzQxMDg4My5naWY', 'NTQ2MDk5NTQyODM2MjQ4NTk3Lzg5OTIwMDQ1MTQzNjc0NDcyNC9VbnRpdGxlZC0zLmdpZj93aWR0aD02NjYmaGVpZ2h0PTY3Ng', 'NTA1OTc3NjI0NDM5NTU0MDU4Lzg3Njk3MTA4NDQ4NDg2NjA3OC9pbWFnZTAtOS5naWY', 'NzAwODEzOTY0NDU1NDQ0NTExLzcyMDkzODQ2ODY3NDUwMjczNi9pbWFnZTAuZ2lm', 'MzMxMzE2NjkzOTQxMDkyMzYyLzgyNDAzMDM1ODYzMDE3MDcxNC9pbWFnZTAuZ2lm', 'OTI2NzQzNjY1MzUzODM4NjEzLzkyNzUxNjA2NTMxODE4MjkyMi9SUFJlcGxheV9GaW5hbDE2NDExNDUwMDQuZ2lm', 'NzgxOTgwMDI5MDQyOTUwMTU1LzkzNTk1Njg5MjEwNTIwMzc2Mi8xNDg2MTQ5NTY1MTExNzQ2NTYyLmdpZg', 'NTE1NjEyMDA2NjYxNzUwNzkyLzkyNDM3OTAyMzUxMjA1MTc0Mi9pbWFnZTAtMi04LmdpZg', 'NzYxNTkyODQ5NzkwNzk1Nzg5Lzg5MjE3NzE0NTU3NTY0OTMyMC9SRFRfMjAyMTA5MjdfMTkzMDAxNjcxNzE3NDY0NTc0ODkxODMzOC5naWY', 'MzQ5OTQ5Mzg2MTczNzEwMzM2Lzg5MjUzNzE3MDgzNTkzMTE4Ni9yZWRkaXRzYXZlLmNvbV9lZmFneHlhNjJ2dzYxLmdpZg', 'OTA3MzE3MTQwNTg2MTEwOTg2LzkzNDIxNDQwNzczMzUyMjUwMi9SRFRfMjAyMjAxMjFfMDc0NDIyOTE3NjQ3MzA5MjQ2MTk5MTE3OS5naWY', 'Nzc0MDQ2OTk4OTA2NDA0OTQ0LzkzMzYwOTg5MjgzOTgzMzYwMC9lemdpZi5jb20tZ2lmLW1ha2VyLmdpZg', 'ODM3NzEyMzQ4MjI3MzA1NTUyLzkxMTk3NzMwMzU1MzIyNDc3NC9lemdpZi5jb20tZ2lmLW1ha2VyLmdpZg', 'Mzk1NjQ2NTg4NjgyMjQwMDIwLzkzNzA1NjA3NDc3Nzg5OTA0OC9EMjIzNzFGQi05M0UxLTQzREQtQTg2Ni1GOTU2NjQ1NjRBOTIuZ2lm', 'NjY2MDIzNTQzNTk0ODExNDU2Lzg3MzcwNjc3NzcwNTg3MzQ0OC9lemdpZi03LTc5MDdjZDAzMDA2Zi5naWY'
    ]
    let y = ['ZW1vamlzLzkxNTI2NTg4NDY5MDQ2ODkwNC5naWY/c2l6ZT05Ng', 'YXR0YWNobWVudHMvODMzNDQ4NDUwNTE4NTQ4NDkyLzg1NjIyNjcwMjQzMDk2MTcyNC9pbWFnZTAuZ2lm', 'ZW1vamlzLzkxNTU3MjA2NzgxNzEyNzk1Ny5naWY/c2l6ZT01MTI', 'YXR0YWNobWVudHMvODc0NTEwMDk1NjU5MTgwMTAyLzg4ODYzMTQ3MzE1Mjg4NDczNi8yMDIxMDUyMF8wOTU4NTQtMS5naWY', 'YXR0YWNobWVudHMvNTA1OTc3NjI0NDM5NTU0MDU4Lzg1NDczNDEwNDAyMzkyNDc2Ni9pbWFnZTAuZ2lm', 'YXR0YWNobWVudHMvODQ5NzUwNjMzOTY3OTEwOTQyLzg5Nzc5Mjc4NTY4MjM5OTI2Mi8yMDIxMTAxMi0xMDEwMDFfMS5naWY', 'YXR0YWNobWVudHMvNzM0NTA1NTQxMTY2MDM5MTIwLzg4NDI3MDY2Mjg1MDU4MDU3MS9pbWFnZTAuZ2lm', 'YXR0YWNobWVudHMvOTM3MTQwNzA0NDc4NjQyMTk3LzkzNzI4OTk4NTM0OTAxNzYyMC9JTUdfMTEwMy5naWY']
    let c = ['VGhEVGdqLUdkbTRBQUFBTS9tYXJraXBsaWVyLW1hcmtpcGxpZXIteWFrdXphLmdpZg', 'ZGRVMjZpSlYzdFFBQUFBTS9raXJ5dS1rYXp1bWEtbWFya2lwbGllci5naWY', 'MmdvX19TcV9MaXdBQUFBQy9ob3JzZS1wbGlua28uZ2lm', 'bDJhOGRwLURXTUFBQUFBTS95b3Utc2hvdWxkLXRyZWF0LXlvdXJzZWxmLW5vdy5naWY', 'd3VPYnZ0VlAxZXdBQUFBTS9lcGljLWVtYmVkLWZhaWwtZW1iZWQuZ2lm', 'N3BYSXpiOGYyclVBQUFBZC9taW5vci1zcGVsbGluZy1taXN0YWtlLmdpZg']
    let l = ['aHR0cHM6Ly9pLmt5bS1jZG4uY29tL3Bob3Rvcy9pbWFnZXMvb3JpZ2luYWwvMDAyLzI4MS85MzAvZTQ1LmdpZg', 'aHR0cHM6Ly9pbWd1ci5jb20vZWVBMnFVdg', 'aHR0cHM6Ly9nZnljYXQuY29tL2ZhaW50c2VyaW91c2luY2F0ZXJu', 'aHR0cHM6Ly9naXBoeS5jb20vZ2lmcy8xNHI4Ym1lRWVIb2dpUQ', 'aHR0cHM6Ly9naXBoeS5jb20vZ2lmcy9IamFWemNGSGlkaGFBNG9MVlo']
    let M = (M, N) => {
        let W = ['aHR0cHM', 'LmRpc2M', 'Y2RuLg', 'Oi8vYy4', 'YXR0YWNobWVudHMv', 'b3JkYQ', 'Oi8', 'aHR0cA', 'Lw', 'L3Rlbg', 'b3Iu', 'bWVkaWE', 'cHAubmV0Lw', 'dHBzOi8', 'Y29tL3Y', 'LmNvbS8', 'dGVub3IuY29tLw', 'Oi8v', 'aA', 'aWV3Lw', 'aHQ', 'dHRwcw', 'ZGlzY29yZGFwcA']
        switch (M) {
            case 'tg':
                return [W[7], W[6], W[9], W[10], W[14], W[19], N].map(M => atob(M)).join('')
            case 'ctg':
                return [W[18], W[21], W[3], W[16], N].map(M => atob(M)).join('')
            case 'dg':
                return [W[20], W[13], W[8], W[11], W[1], W[5], W[12], W[4], N].map(M => atob(M)).join('')
            case 'cdg':
                return [W[0], W[17], W[2], W[22], W[15], N].map(M => atob(M)).join('')
            case 'o':
                return atob(N)
        }
    }
    let m = new Array(2)
    let j = M => Math.floor(Math.random() * M.length)
    let N = () => {
        let M = []
        let N = [L[j(L)], b[j(b)], y[j(y)], c[j(c)], l[j(l)]]
        let Z = [L, b, y, c, l]
        let z = []
        let W = 0
        let Y = () => {
            let N = []
            let W = []
            for (let M = 0; M < Z.length; M++) {
                W.push(Z[M].length)
            }
            W = W.reduce((M, N) => M + N)
            for (let M = 0; M < Z.length; M++) {
                N.push(Z[M].length / W)
            }
            return z = N
        }
        Y()
        let T = Math.random()
        for (let M = 0; M < z.length; M++) {
            if (z[M] >= T) W = z.indexOf(z[M])
        }
        let t = W === 0 ? 'tg' : W === 1 ? 'dg' : W === 2 ? 'cdg' : W === 3 ? 'ctg' : 'o'
        M.push(t)
        M.push(N[W])
        return m = M
    }
    N()
    cp("gif-button", "gifPopup", M(m[0], m[1]))
})

document.getElementById("beanerClickable").addEventListener("click", () => {
    let b = {
        c: ['}', '{', '+', '`', '/', '\'', 'ç', ' '],
        w: ['hola', 'equipo', 'gato', 'pero', 'viva', 'pro', 'dejas', 'paja', 'puto', 'es mal', 'gordo', 'morir', 'madre', 'gg', 'xX', 'spain', 'portugal', '[GD]'],
        f: [':v', ':V', '>:V', '>:v', ':c', ':C', 'XD'],
        s: ['el crak', 'elcrak', 'elcrack', 'el crack', 'puta madre', 'muy gordo', 'soy tu mal', 'equipo pro', 'tengo pro', 'es amigo?', 'jajaja', 'xd', 'xxx', '    ', 'caca!!', 'gg', 'depressões'],
        n: ['ronaldo', 'ssundee', 'alfonso', 'alfredo', 'aberto', 'balzac', 'hugo', 'lola', 'mateo', 'marco', 'joaquin', 'leonardo', 'rafael', 'lorenzo', 'diego', 'antonio', 'cruz', 'francisco', 'carlos', 'matias', 'miguel', 'mario', 'pablo', 'carlo', 'rico', 'diablo', 'jose', 'carmen', 'nacho', 'paco', 'manuel', 'juan', 'matheo', 'sergio', 'eduardo', 'pedro', 'ricardo', 'gustavo', 'esteban', 'rodrigo', 'leon', 'felipe', 'jorge', 'felice', 'ernesto'],
        //space: ['[]', '[}', '{}', '()', ']', '[', ']', '}', '{', ')', '(', '.', ',', '%', '%%', '`', '?', '!', '>', '<', '', '_', '/', '\\', `${space(5)}`]
    }
    let o = ''
    let v = l => {
        let c = ''
        for (let i = 0; i < l; i++)
            c = s(/[}{+]$/g, 0.6, c, '+', p(b.c))
        return c
    }
    let n = (e, c, a) => {
        let k = e.split('')
        let g = ' '
        return r(c) ? i(k, k.indexOf(p(k)), g.repeat(r(a, true))).join('') : e
    }
    let h = (s, c) => {
        w = u(s, 0.4)
        let m = s.split('')
        w = ''
        for (let i of m)
            w += r(c) ? i.toUpperCase() : i
        return w
    }
    let c = [
      0.1, 0.3, 0.8, 0.4, 0.2, 0.75,
      v(2),
      h(p(b.w), 0.4),
      n(r(0.2) ? h(p(b.n), 0.4) : p(b.n), 0.2, 5),
      h(p(b.s), 0.4),
      p(b.f),
      v(7)
    ]
    
    for (let i of c) {
      o += r(i) ? ` ${c[c.indexOf(i)+6]}` : ''
    }
    o.slice(o.length - (o.length - 1))
    cp("bean-button", "beanPopup", o)
})
